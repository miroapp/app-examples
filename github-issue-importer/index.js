require('dotenv-safe').config()

const axios = require('axios')

//////////////////////////////////
// FILL IN THE IDS HERE
//////////////////////////////////
const appConfig = {
  boardId: '',
  inboxFrameId: '',
}
//////////////////////////////////
// FILL IN THE IDS HERE
//////////////////////////////////

class GithubApiService {
  async readIssues() {
    const response = await axios.get('https://api.github.com/issues?state=all', {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'User-Agent': 'Miro Importer',
      },
    })
    return response.data
  }
}

class MiroBoardApiService {
  constructor(miroProperties) {
    this._miro = miroProperties
  }

  async createWidget(widgetData) {
    if (!widgetData.parentFrameId) {
      widgetData.parentFrameId = this._miro.inboxFrameId
    }
    const response = await axios.post(`https://api.miro.com/v1/boards/${this._miro.boardId}/widgets`, widgetData, {
      headers: {
        Authorization: `Bearer ${process.env.MIRO_TOKEN}`,
      },
    })
    return response.data
  }
}

class ConversionService {
  static _styleByIssue(issue) {
    switch (issue.state) {
      case 'open':
        return {backgroundColor: '#0ca789'}
      case 'closed':
        return {backgroundColor: '#f24726'}
      default:
        return {backgroundColor: '#808080'}
    }
  }

  static convert2Card(issue) {
    let cardData = {
      type: 'card',
      title: `<a href="${issue.html_url}">${issue.title}</a>`,
      description: `${issue.body}<br /><br />
                          ------------------------------------<br />
                          repo: <a href="${issue.repository.html_url}">${issue.repository.full_name}</a>`,
      card: {
        customFields: [
          {
            value: `${issue.repository.full_name}`,
            iconUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          },
        ],
      },
    }
    issue.assignees.forEach((assignee) => {
      cardData.card.customFields.push({
        value: `${assignee.login}`,
        iconUrl: `${assignee.avatar_url}`,
      })
    })
    cardData.style = this._styleByIssue(issue)
    return cardData
  }
}

const githubService = new GithubApiService()
const boardApiService = new MiroBoardApiService(appConfig)

githubService
  .readIssues()
  .then((issues) =>
    issues.forEach((issue) => {
      const cardData = ConversionService.convert2Card(issue)
      boardApiService
        .createWidget(cardData)
        .then((value) => console.log(`card widget ${value.id} has been created from an issue ${issue.url}`))
        .catch((reason) =>
          console.error(
            `*** creating card widget error: ${reason.response.status} ${JSON.stringify(reason.response.data)}`,
          ),
        )
    }),
  )
  .catch((reason) =>
    console.error(`*** reading GitHub issues error: ${reason.response.status} ${JSON.stringify(reason.response.data)}`),
  )

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

class GitlabApiService {
  async readIssues() {
    const response = await axios.get(`${process.env.GITLAB_ISSUE_SOURCE_API_URL}?private_token=${process.env.GITLAB_TOKEN}&scope=all`)
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
      title: `<a href="${issue.web_url}">${issue.title}</a>`,
      description: `${issue.description}<br /><br />
                          ------------------------------------<br />
                          repo: <a href="${issue._links.project}">${issue.references.full}</a>`,
      card: {
        customFields: [
          {
            value: `${issue.references.full}`,
            iconUrl: 'https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png',
          },
        ],
      },
    }
    issue.assignees.forEach((assignee) => {
      cardData.card.customFields.push({
        value: `${assignee.name}`,
        iconUrl: `${assignee.avatar_url}`,
      })
    })
    cardData.style = this._styleByIssue(issue)
    return cardData
  }
}

const gitlabService = new GitlabApiService()
const boardApiService = new MiroBoardApiService(appConfig)

gitlabService
  .readIssues()
  .then((issues) =>
    issues.forEach((issue) => {
      const cardData = ConversionService.convert2Card(issue)
      boardApiService
        .createWidget(cardData)
        .then((value) => console.log(`card widget ${value.id} has been created from an issue ${issue.web_url}`))
        .catch((reason) =>
          console.error(
            `*** creating card widget error: ${reason.response.status} ${JSON.stringify(reason.response.data)}`,
          ),
        )
    }),
  )
  .catch((reason) =>
    console.error(`*** reading GitHub issues error: ${reason.response} ${JSON.stringify(reason.response)}`),
  )

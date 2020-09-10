import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './styles.less'

function Root() {
  const [state, setState] = React.useState({boardTitle: ''})

  async function getBoardTitle() {
    const boardInfo = await miro.board.info.get()
    setState({boardTitle: boardInfo.title})
  }

  async function deleteAllContent() {
    const allObjects = await miro.board.widgets.get()
    await miro.board.widgets.deleteById(allObjects.map((object) => object.id))
    await miro.showNotification('Content has been deleted')
  }

  return (
    <div className="container">
      <button onClick={() => getBoardTitle()}>Get board title</button>
      <br />
      <div>Board title is: {state.boardTitle}</div>
      <br />
      <br />
      <button onClick={() => deleteAllContent()}>Delete all content</button>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('react-app'))

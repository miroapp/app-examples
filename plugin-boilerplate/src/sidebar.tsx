require('./styles.less')
import * as React from 'react'
import * as ReactDOM from 'react-dom'

class Root extends React.Component {

	state = {
		boardTitle: ''
	}

	async getBoardTitle() {
		let boardInfo = await miro.board.info.get()
		this.setState({boardTitle: boardInfo.title})
	}

	async deleteAllContent() {
		let allObjects = await miro.board.widgets.get()
		await miro.board.widgets.deleteById(allObjects.map(object => object.id))
		await miro.showNotification('Content has been deleted')
	}

	render() {
		return (
			<div className="container">
				<button onClick={() => this.getBoardTitle()}>Get board title</button>
				<br/>
				<div>Board title is: {this.state.boardTitle}</div>
				<br/>
				<br/>
				<button onClick={() => this.deleteAllContent()}>Delete all content</button>
			</div>
		)
	}
}

ReactDOM.render(
	<Root/>,
	document.getElementById('react-app')
)

import * as copy from 'copy-to-clipboard'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
	createStartHotspot,
	enterPrototypingMode,
	exitPrototypingMode,
	findAllScreens,
	findStartHotspot,
	gotoWidget,
	onCanvasClicked,
	onCommentCreated,
} from 'bottom-panel-controller'
import {createHotspot} from 'bottom-panel-controller'
import SVG from 'react-inlinesvg'
import {PLAY_WIDTH} from 'config'

require('./styles.less')
const SquareIcon = require('images/square.svg')
const PlayIcon = require('images/play.svg')
const LinkIcon = require('images/link.svg')
const ArrowIcon = require('images/arrow.svg')
const hotspotPreview = `data:image/svg+xml,%3Csvg width='152' height='66' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill-opacity='0.5' fill='%232d9bf0' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`

class Root extends React.Component {

	private containerRef: any = React.createRef()

	state = {
		viewMode: 'loading', //edit, play, select-start-screen
		selectStartScreenMode: false,
		screens: [],
		screenIndex: 1,
	}

	async componentWillMount() {
		const savedState = await miro.__getRuntimeState()

		if (savedState.enterPrototypingMode) {
			miro.__setRuntimeState({enterPrototypingMode: false})
			this.play()
		} else if (savedState.prototypingMode) {
			this.subscriptPrototypingModeEvents()
			this.setState({viewMode: 'play'})
		} else {
			this.setState({viewMode: 'edit'})
		}
	}

	componentDidMount(): void {
		// Add drag-and-drop for hotspot
		const options = {
			dragDirection: 'vertical',
			draggableItemSelector: '.hotspot-button',
			getDraggableItemPreview: () => {
				return {
					width: 152,
					height: 66,
					url: hotspotPreview,
				}
			},
			onDrop: (canvasX: number, canvasY: number) => {
				createHotspot({x: canvasX, y: canvasY})
			},
		}
		miro.board.ui.initDraggableItemsContainer(this.containerRef.current, options)
	}

	private createHotspot = () => {
		createHotspot()
	}

	private async play() {
		const shapes = await miro.board.widgets.get({'type': 'SHAPE'})
		const hasStartHotspot = !!findStartHotspot(shapes)
		if (hasStartHotspot) {
			const success = await enterPrototypingMode()
			if (success) {
				miro.__setRuntimeState({prototypingMode: true})
				this.subscriptPrototypingModeEvents()
				const screens = await findAllScreens()
				this.setState({
					viewMode: 'play',
					screens: screens,
					screenIndex: 1,
				})
				miro.board.ui.resizeTo({width: PLAY_WIDTH})
			} else {
				this.setState({viewMode: 'edit'})
			}
		} else {
			this.setState({viewMode: 'select-start-screen'})
			const res = await createStartHotspot()
			if (res) {
				this.play()
			}
		}
	}

	private subscriptPrototypingModeEvents() {
		miro.addListener('ESC_PRESSED', this.onExitPrototypingMode)
		miro.addListener('CANVAS_CLICKED', onCanvasClicked)
		miro.addListener('COMMENT_CREATED', onCommentCreated)
	}

	private async onExitPrototypingMode() {
		await miro.__setRuntimeState({prototypingMode: false})
		exitPrototypingMode()
	}

	private onPrevScreen() {
		if (this.state.screenIndex > 1) {
			const index = this.state.screenIndex - 1
			this.setState({screenIndex: index})
			gotoWidget(this.state.screens[index - 1])
		}
	}

	private onNextScreen() {
		if (this.state.screenIndex < this.state.screens.length) {
			const index = this.state.screenIndex + 1
			this.setState({screenIndex: index})
			gotoWidget(this.state.screens[index - 1])
		}
	}

	private getLink = () => {
		miro.board.__getBoardURLWithParams({runPrototyping: true})
			.then((url) => {
				copy(url)
				miro.showNotification('Link copied')
			})
	}

	render() {
		const editMode = (
			<div className="edit-mode">
				<div className="btn play-button" onClick={() => this.play()}>
					<SVG className="icon" src={PlayIcon}/>
				</div>
				<div className="btn hotspot-button" onClick={() => this.createHotspot()}>
					<SVG className="icon" src={SquareIcon}/>
					<span>Hotspot</span>
				</div>
				<div className="btn link-button" onClick={() => this.getLink()}>
					<SVG className="icon" src={LinkIcon}/>
					<span>Autoplay link</span>
				</div>
			</div>
		)

		const isFirstScreen = () => this.state.screenIndex === 1
		const isLastScreen = () => this.state.screenIndex === this.state.screens.length
		const playMode = (
			<div className="edit-mode">
				<div className="btn exit-button" onClick={() => this.onExitPrototypingMode()}>
					<span>Exit</span>
				</div>
				<div className={'btn prev-button ' + (isFirstScreen() ? 'btn--disabled' : '')} onClick={() => this.onPrevScreen()}>
					<SVG className="icon" src={ArrowIcon}/>
				</div>
				<div className="screen-number">
					<span>{this.state.screenIndex} of {this.state.screens.length}</span>
				</div>
				<div className={'btn next-button ' + (isLastScreen() ? 'btn--disabled' : '')} onClick={() => this.onNextScreen()}>
					<SVG className="icon" src={ArrowIcon}/>
				</div>
				<div className="btn link-button" onClick={() => this.getLink()}>
					<SVG className="icon" src={LinkIcon}/>
					<span>Autoplay link</span>
				</div>
			</div>
		)

		const selectStartScreenMode = (
			<div className="select-start-screen">Please select start screen</div>
		)

		const getView = () => {
			if (this.state.viewMode === 'edit') {
				return editMode
			} else if (this.state.viewMode === 'play') {
				return playMode
			} else if (this.state.viewMode === 'select-start-screen') {
				return selectStartScreenMode
			} else {
				return null
			}
		}

		return <div ref={this.containerRef}>{getView()}</div>
	}
}

miro.onReady(() => {
	ReactDOM.render(
		<Root/>,
		document.getElementById('react-app'),
	)
})

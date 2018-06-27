import * as React from 'react'
import * as ReactDOM from 'react-dom'
import LoadingOverlay from './loading-overlay'
import { Chart } from 'primereact/components/chart/Chart'

const rtb = (window as any)['rtb']

enum ShapeType {
	// LINE = 1,
	// ARROW = 2,
	RECTANGLE = 3,
	CIRCLE = 4,
	TRIANGLE = 5,
	BUBBLE = 6,
	ROUNDER = 7,
	RHOMBUS = 8,
	// ARROW_SKETCH = 9,
	PARALL = 10,
	STAR = 11,
	ARROW_BIG = 12
}

interface IChart {
	type:string
	data:any
}
interface IProps {}
interface IState {
	loading:boolean
	chart:IChart|null
}

const COLORS = [
	0xFEF445,
	0xFAC710,
	0xF24726,
	0xE6E6E6,
	0xCEE741,
	0x8FD14F,
	0xDA0063,
	0x808080,
	0x12CDD4,
	0x0CA789,
	0x9510AC,
	0x1A1A1A,
	0x2D9BF0,
	0x414BB2,
	0x652CB3
]

class Root extends React.Component<IProps, IState> {

	state:IState = {
		loading: false,
		chart: null
	}

	constructor(props:IProps) {
		super(props)

		let overlay = document.getElementById('loading-overlay')
		if (overlay) {
			overlay.remove()
		}
	}

	private widgetsCount() {
		this.setState({ loading: true })

		rtb.board.getAllObjects()
			.then((objects:any[]) => {

				let labels:string[] = []
				let counts:number[] = []
				let colors:string[] = []
				let hoverColors:string[] = []

				objects.forEach(object => {
					let type = object.type
					let idx = labels.indexOf(type)
					if (idx === -1) {
						labels.push(type)
						idx = labels.length - 1
						counts[idx] = 0
						colors[idx] = intColorToHex(COLORS[idx])
						hoverColors[idx] = colors[idx] // poka tak
					}

					counts[idx] += 1
				})

				this.setState({
					loading: false,
					chart: {
						type: 'pie',
						data: {
							labels,
							datasets: [{
								data: counts,
								backgroundColor: colors,
								hoverBackgroundColor: hoverColors
							}]
						}
					}
				})
			})
	}

	private shapesTypes() {
		this.setState({ loading: true })

		rtb.board.widgets.shapes.get()
			.then((objects:any[]) => {

				let labels:string[] = []
				let counts:number[] = []
				let colors:string[] = []
				let hoverColors:string[] = []

				objects.forEach(object => {
					if (!object.style || object.style.shapeType === undefined || object.style.shapeType === null) {
						return
					}

					let type = ShapeType[object.style.shapeType]
					if (!type) {
						return
					}

					let idx = labels.indexOf(type)
					if (idx === -1) {
						labels.push(type)
						idx = labels.length - 1
						counts[idx] = 0
						colors[idx] = intColorToHex(COLORS[idx])
						hoverColors[idx] = colors[idx] // poka tak
					}

					counts[idx] += 1
				})

				this.setState({
					loading: false,
					chart: {
						type: 'pie',
						data: {
							labels,
							datasets: [{
								data: counts,
								backgroundColor: colors,
								hoverBackgroundColor: hoverColors
							}]
						}
					}
				})
			})
	}

	private shapesTextOrNot() {
		this.setState({ loading: true })

		rtb.board.widgets.shapes.get()
			.then((objects:any[]) => {

				let labels:string[] = []
				let counts:number[] = []
				let colors:string[] = []
				let hoverColors:string[] = []

				objects.forEach(object => {
					let type = object.text ? 'With text' : 'No text'

					let idx = labels.indexOf(type)
					if (idx === -1) {
						labels.push(type)
						idx = labels.length - 1
						counts[idx] = 0
						colors[idx] = intColorToHex(COLORS[idx])
						hoverColors[idx] = colors[idx] // poka tak
					}

					counts[idx] += 1
				})

				this.setState({
					loading: false,
					chart: {
						type: 'pie',
						data: {
							labels,
							datasets: [{
								data: counts,
								backgroundColor: colors,
								hoverBackgroundColor: hoverColors
							}]
						}
					}
				})
			})
	}

	render() {
		return (
			<div className="container">
				<div className="sidebar">
					<button onClick={() => this.widgetsCount()}>Widgets count</button>
					<button onClick={() => this.shapesTypes()}>Shapes types</button>
					<button onClick={() => this.shapesTextOrNot()}>Shapes with/out text</button>
				</div>
				<div className="content">
					{this.renderChart()}
					<LoadingOverlay visible={this.state.loading}/>
				</div>
			</div>
		)
	}

	private renderChart() {
		let {chart} = this.state
		if (!chart) {
			return <span>Press something on the left sidebar :)</span>
		}

		return <Chart type={chart.type} data={chart.data} />
	}
}

ReactDOM.render(
	<Root/>,
	document.getElementById('react-app')
)

function intColorToHex(color:number):string {
	return '#' + ((1 << 24)
		| (((color >> 16) & 255) << 16)
		| (((color >> 8) & 255) << 8)
		| color & 255).toString(16).substr(1)
}
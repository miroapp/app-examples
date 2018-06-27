import * as React from 'react'

interface IProps {
	visible:boolean
}

export default class LoadingOverlay extends React.Component<IProps, any> {
	render() {
		if (this.props.visible) {
			return (
				<div className="loading-overlay">
					<div className="lds-spinner">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)
		} else {
			return null
		}
	}
}
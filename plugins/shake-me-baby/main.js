rtb.initialize({
	pluginId: 'shaker',
	onStart: () => {
		function animate() {
			zoomIn().then(zoomOut).then(animate)
		}
		// animate()
	}
})

function zoomIn() {
	return rtb.board.setZoom(0.5)
}

function zoomOut() {
	return rtb.board.setZoom(4)
}
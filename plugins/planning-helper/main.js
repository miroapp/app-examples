rtb.initialize({
	onStart: function () {
		console.log('Shaker: onStart()')
	},
	extensionPoints: {
		bottomBar: {
			title: 'Planning helper',
			svgIcon: '',
			positionPriority: 2,
			onClick: function () {
				rtb.board.openLeftSidebar('sidebar.html')
			}
		}
	}
})

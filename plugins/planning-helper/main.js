rtb.initialize({
	onStart: function () {
		console.log('Shaker: onStart()')
	},
	extensionPoints: {
		bottomBar: {
			title: 'Planning helper',
			svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
			positionPriority: 2,
			onClick: function () {
				rtb.board.openLeftSidebar('sidebar.html')
			}
		}
	}
})

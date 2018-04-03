const sidebarUrl = 'sidebar.html'

rtb.initialize({
	extensionPoints: {
		bottomBar: {
			title: 'Background chooser',
			svgIcon: '',
			positionPriority: 1,
			onClick: function () {
				rtb.board.openLeftSidebar(sidebarUrl)
			}
		}
	}
})
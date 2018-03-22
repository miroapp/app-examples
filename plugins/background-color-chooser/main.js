const sidebarUrl = 'sidebar.html'

rtb.initialize({
	extensionPoints: {
		bottomBar: {
			title: 'Background chooser',
			svgIcon: '',
			onClick: function () {
				rtb.board.ui.openLeftSidebar(sidebarUrl)
			}
		}
	}
})
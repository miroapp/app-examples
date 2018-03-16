const sidebarUrl = 'sidebar.html'

rtb.initialize({
	extensionPoints: {
		bottomBar: {
			title: 'awesome plugin',
			svgIcon: '',
			onClick: function () {
				rtb.board.ui.openLeftSidebar(sidebarUrl)
			}
		}
	}
})
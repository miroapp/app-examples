const sidebarUrl = 'sidebar.html'
const icon24 = '<path fill="currentColor" fill-rule="nonzero" d="M16.985 19.501l-.952-5.55 4.033-3.932-5.574-.81L12 4.16l-2.492 5.05-5.574.81 4.033 3.931-.952 5.551L12 16.881l4.985 2.62zM12 19.14l-5.704 2.999A1.08 1.08 0 0 1 4.729 21l1.09-6.351-4.616-4.499a1.08 1.08 0 0 1 .599-1.842l6.377-.927 2.853-5.779a1.08 1.08 0 0 1 1.936 0l2.853 5.78 6.377.926a1.08 1.08 0 0 1 .599 1.842l-4.615 4.499L19.272 21a1.08 1.08 0 0 1-1.568 1.139l-5.704-3z"/>'

rtb.initialize({
	extensionPoints: {
		bottomBar: {
			title: 'Google icons',
			svgIcon: icon24,
			positionPriority: 1,
			onClick: function () {
				rtb.board.openLeftSidebar(sidebarUrl)
			}
		}
	}
})
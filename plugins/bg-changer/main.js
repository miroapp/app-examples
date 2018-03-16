const sidebarUrl = 'https://8eefe858.ngrok.io/plugins/bg-changer/sidebar.html'

rtb.initialize({
	extensionPoints: {
		bottomBar: {
			title: 'awesome plugin',
			svgIcon: '',
			onClick: function () {
				alert('Hi!')
			}
		}
	}
})
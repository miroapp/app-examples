const colors = [
	0xff8000,
	0xbfff00,
	0xbf00ff,
	0xff0000,
	0x4000ff,
	0x00ff00,
	0xff00bf,
	0x00ff40,
	0x40ff00,
	0xff00ff,
	0xffbf00,
	0x80ff00,
	0xff0080,
	0x00ffbf,
	0x00ff80,
	0xff0040,
	0x0080ff,
	0xff4000,
	0x00bfff,
	0x0000ff,
	0x8000ff,
	0x00ffff,
	0xffff00,
	0x0040ff,
]

let currentIndex = 0
let inc = 1
rtb.initialize({
	onStart: () => {
		console.log('onStart')
	},
	onStop: () => {
		console.log('onStop')
	},
	extensionPoints: {
		bottomBar: {
			title: 'Run bg changer',
			svgIcon: '<path fill="none" fill-rule="evenodd" stroke="#000" stroke-width="2" d="M3 3h18v18H3z"/>',
			onClick: () => {
				rtb.board.ui.openLeftSidebar('https://8eefe858.ngrok.io/plugins/bg-changer/sidebar.html?sdk=https://site.ptdev.multivi.ru/app/static/rtb.sdk.js')
				// rtb.board.ui.openLeftSidebar('https://pltnkv.github.io/rtb-toolbar/1/')
				// rtb.board.ui.openLeftSidebar('https://www.youtube.com/embed/wzjWIxXBs_s')

				// function animate() {
				// 	changeColor().then(animate)
				// }
				//
				// changeColor()
			}
		}
	}
})

function changeColor() {
	currentIndex = currentIndex + inc
	if (currentIndex === colors.length) {
		currentIndex--
		inc = -1
	} else if (currentIndex < 0) {
		currentIndex = 0
		inc = 1
	}
	return rtb.board.setBackgroundColor(colors[currentIndex])
}
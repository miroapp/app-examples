rtb.onReady(() => {
	rtb.addListener(rtb.enums.event.SELECTION_UPDATED, getWidget)
	getWidget()
})

const tipElement = document.getElementById('tip')
const widgetTextElement = document.getElementById('widget-text')

async function getWidget() {
	let widgets = await rtb.board.getSelection()
	let text = widgets[0].text
	if (typeof text === 'string') {
		tipElement.style.opacity = '0'
		widgetTextElement.value = text
	} else {
		tipElement.style.opacity = '1'
		widgetTextElement.value = ''
	}
}


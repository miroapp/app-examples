miro.onReady(() => {
  // subscribe on user selected widgets
  miro.addListener(miro.enums.event.SELECTION_UPDATED, getWidget)
  getWidget()
})

// Get html elements for tip and text container
const tipElement = document.getElementById('tip')
const widgetTextElement = document.getElementById('widget-text')

async function getWidget() {
  // Get selected widgets
  let widgets = await miro.board.selection.get()

  // Get first widget from selected widgets
  let text = widgets[0].text

  // Check that widget has text field
  if (typeof text === 'string') {
    // hide tip and show text in sidebar
    tipElement.style.opacity = '0'
    widgetTextElement.value = text
  } else {
    // show tip and clear text in sidebar
    tipElement.style.opacity = '1'
    widgetTextElement.value = ''
  }
}

let lastSelectedWidgetId
let widgetName = document.querySelector('#widget-name')
let widgetInfo = document.querySelector('.widget-info')
let editor = document.querySelector('#editor')
let placeholder = document.querySelector('.no-selected-widget')

function onSelectionChange(e) {
  let selectedWidgets = e.data
  updateSelection(selectedWidgets)
}

function updateSelection(selectedWidgets) {
  let selectedWidget = selectedWidgets[0]
  if (selectedWidgets.length === 1) {
    showElement(widgetInfo)
    hideElement(placeholder)
    saveEditorData()
    lastSelectedWidgetId = selectedWidget.id
    widgetName.innerText = selectedWidget.type
    editor.value = getData(lastSelectedWidgetId)
  } else {
    showElement(placeholder)
    hideElement(widgetInfo)
  }
}

function showElement(el) {
  el.style.display = 'block'
}

function hideElement(el) {
  el.style.display = 'none'
}

hideElement(placeholder)
hideElement(widgetInfo)

miro.onReady(() => {
  miro.addListener(miro.enums.event.SELECTION_UPDATED, onSelectionChange)
  miro.board.selection.get().then((selectedWidgets) => {
    updateSelection(selectedWidgets)
  })
})

editor.addEventListener('change', saveEditorData)

async function saveEditorData() {
  if (lastSelectedWidgetId) {
    saveData(lastSelectedWidgetId, editor.value)
    lastSelectedWidgetId = undefined
  }
}

const LS_KEY = 'rtb-plugin-widget-info'

function saveData(widgetId, text) {
  let data = JSON.parse(localStorage.getItem(LS_KEY)) || {}
  data[widgetId] = text
  localStorage.setItem(LS_KEY, JSON.stringify(data))
}

function getData(widgetId) {
  let data = JSON.parse(localStorage.getItem(LS_KEY)) || {}
  return data[widgetId] || ''
}

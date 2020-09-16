'use strict'

const ITEM_HIGHLIGHTED_CLASS = 'item--highlighted'

let framesData = []
let groupsData = []
let widgetsData = []
let framesByWidget = new Map()
let framesById = new Map()
let groupsByWidget = new Map()
let groupsById = new Map()
let widgetsById = new Map()

async function rebuild() {
  framesByWidget.clear()
  framesById.clear()
  groupsByWidget.clear()
  groupsById.clear()
  widgetsById.clear()
  framesData = await miro.board.frames.get()
  groupsData = await miro.board.groups.get()
  widgetsData = await miro.board.widgets.get()
  redraw()
}

let container = document.querySelector('.container')
let template = document.querySelector('template').content
let frameTemplate = template.querySelector('.items-container--frame')
let groupTemplate = template.querySelector('.items-container--group')
let widgetTemplate = template.querySelector('.item-widget')

function redraw() {
  container.innerHTML = ''

  framesData.forEach((frame) => {
    let el = createFrameElement(frame)
    container.appendChild(el)
  })

  //create remaining groups
  groupsData.forEach((group) => {
    if (!groupsById.has(group.id)) {
      let el = createGroupElement(group)
      container.appendChild(el)
    }
  })

  // create the remaining widgets
  widgetsData.forEach((widget) => {
    if (!widgetsById.has(widget.id)) {
      let el = createWidgetElement(widget)
      container.appendChild(el)
    }
  })
}

function createFrameElement(frame) {
  let frameEl = frameTemplate.cloneNode(true)
  frameEl.querySelector('span').innerText = frame.title
  framesById.set(frame.id, frameEl)
  attachZoomListener(frameEl, frame.id)

  frame.childrenIds.forEach((widgetId) => {
    framesByWidget.set(widgetId, frameEl)
    let w = widgetsData.find((widget) => widget.id === widgetId)
    if (w.groupId) {
      let groupEl = getGroupEl(w.groupId)
      frameEl.appendChild(groupEl)
    } else {
      let widgetEl = createWidgetElement(w)
      frameEl.appendChild(widgetEl)
    }
  })

  return frameEl
}

function getGroupEl(groupId) {
  let el = groupsById.get(groupId)
  if (!el) {
    el = createGroupElement(groupsData.find((g) => g.id === groupId))
  }
  return el
}

function createGroupElement(group) {
  let groupEl = groupTemplate.cloneNode(true)
  groupEl.querySelector('span').innerText = `Group ${group.id}`
  attachZoomListener(groupEl, group.id)
  groupsById.set(group.id, groupEl)

  group.childrenIds.forEach((widgetId) => {
    groupsByWidget.set(widgetId, groupEl)
    let w = widgetsData.find((widget) => widget.id === widgetId)
    let widgetEl = createWidgetElement(w)
    groupEl.appendChild(widgetEl)
  })

  return groupEl
}

function createWidgetElement(widget) {
  let widgetEl = widgetTemplate.cloneNode(true)
  widgetEl.querySelector('span').innerText = capitalizeFirstLetter(widget.type)
  attachZoomListener(widgetEl, widget.id)
  widgetsById.set(widget.id, widgetEl)
  return widgetEl
}

function capitalizeFirstLetter(string) {
  string = string.toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function attachZoomListener(element, objectId) {
  element.addEventListener('click', (e) => {
    console.log(objectId)
    e.stopPropagation()
    miro.board.zoomToObject(objectId, true)
  })
}

function highlightWidgets(ids) {
  framesById.forEach((frameEl) => {
    frameEl.classList.remove(ITEM_HIGHLIGHTED_CLASS)
  })
  widgetsById.forEach((widgetEl) => {
    widgetEl.classList.remove(ITEM_HIGHLIGHTED_CLASS)
  })
  ids.forEach((id) => {
    let element = widgetsById.get(id) || framesById.get(id)
    if (element) {
      element.classList.add(ITEM_HIGHLIGHTED_CLASS)
    }
  })
}

function onSelectionUpdated(e) {
  highlightWidgets(e.data.map((w) => w.id))
}

miro.onReady(() => {
  rebuild()
  let event = miro.enums.event
  miro.addListener(event.WIDGETS_CREATED, rebuild)
  miro.addListener(event.WIDGETS_DELETED, rebuild)
  miro.addListener(event.SELECTION_UPDATED, onSelectionUpdated)
})

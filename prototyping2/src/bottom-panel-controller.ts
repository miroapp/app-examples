import {APP_ID} from 'config'

export function findStartHotspot(shapes: SDK.IWidget[]): SDK.IWidget | undefined {
  return shapes.find((shape) => shape.metadata[APP_ID] && shape.metadata[APP_ID].startHotspot)
}

export async function enterPrototypingMode(startHotspotWidget: SDK.IWidget): Promise<SDK.IWidget | void> {
  const shapes = await miro.board.widgets.get<SDK.IShapeWidget>({type: 'SHAPE'})
  const hotspots = shapes.filter(isHotspotWidget)
  const hotspotsIsValid = await checkAllHotspotsLinks(hotspots)

  if (hotspotsIsValid) {
    const screenWidget = await goToWidgetFromHotspot(startHotspotWidget.id)
    if (screenWidget) {
      const permissions = await miro.currentUser.getCurrentBoardPermissions()
      const canEdit = permissions.indexOf('EDIT_CONTENT') !== -1
      if (canEdit) {
        await miro.board.widgets.bringForward(hotspots)
      }
      await miro.board.ui.__hideButtonsPanels(['top', 'bottomBar', 'map'])
      await miro.board.ui.__limitToolbarMode('commentor')
      await miro.board.selection.selectWidgets([])
      await miro.board.__disableLeftClickOnCanvas()
      if (canEdit) {
        await hideAllLinks()
        await hideHotspots()
      }
    }
    return screenWidget
  }
}

export async function exitPrototypingMode() {
  const permissions = await miro.currentUser.getCurrentBoardPermissions()
  const canEdit = permissions.indexOf('EDIT_CONTENT') !== -1
  await miro.board.viewport.__unmask()
  await miro.board.ui.__showButtonsPanels('all')
  await miro.board.ui.__clearToolbarModeLimit()
  await miro.board.__enableLeftClickOnCanvas()
  if (canEdit) {
    await restoreAllLinks()
    await showHotspots()
  }
  await miro.board.ui.closeBottomPanel() // This command should be last
}

async function hideAllLinks() {
  const lines = await miro.board.widgets.get({type: 'LINE'})
  const newLines = lines.map(({id}) => ({
    id,
    clientVisible: false,
  }))

  await miro.board.widgets.update(newLines)
}

async function restoreAllLinks(): Promise<any> {
  const lines = await miro.board.widgets.get({type: 'LINE'})
  const newLines = lines.map(({id}) => ({
    id,
    clientVisible: true,
  }))

  await miro.board.widgets.update(newLines)
}

export async function goToWidgetFromHotspot(hotspotId: string): Promise<SDK.IWidget | void> {
  const lines = await miro.board.widgets.get({type: 'LINE', startWidgetId: hotspotId})
  if (lines.length > 0) {
    if (lines.length > 1) {
      miro.showErrorNotification('Too match links')
    } else {
      const line = lines[0] as SDK.ILineWidget
      if (!line.endWidgetId) {
        miro.showErrorNotification('Can not find the end of connection')
      } else {
        const sourceWidget = (await miro.board.widgets.get({id: line.startWidgetId}))[0]
        if (isHotspotWidget(sourceWidget)) {
          const targetWidget = (await miro.board.widgets.get({id: line.endWidgetId}))[0]
          return gotoWidget(targetWidget)
        }
      }
    }
  } else {
    miro.showErrorNotification('Hotspot has no links')
  }
}

export async function gotoWidget(targetWidget: SDK.IWidget) {
  await miro.board.selection.selectWidgets([])
  zoomToWidget(targetWidget)
  return targetWidget
}

async function zoomToWidget(w: SDK.IWidget) {
  const v = {
    x: w.bounds.left,
    y: w.bounds.top,
    width: w.bounds.width,
    height: w.bounds.height,
  }
  const padding = {
    top: 60,
    left: 80,
    right: 80,
    bottom: 70,
  }
  miro.board.viewport.__mask(v, padding)
  await miro.board.viewport.setViewport(v, padding)
}

export function isHotspotWidget(widget: SDK.IWidget) {
  return widget.metadata[APP_ID] && widget.metadata[APP_ID].hotspot
}

async function showHotspots() {
  const hotspots = await getHotspots()
  const updatingHotspots = hotspots.map((h) => ({
    id: h.id,
    clientVisible: true,
  }))
  miro.board.widgets.update(updatingHotspots)
}

async function hideHotspots() {
  const hotspots = await getHotspots()
  const updatingHotspots = hotspots.map((h) => ({
    id: h.id,
    clientVisible: false,
  }))
  miro.board.widgets.update(updatingHotspots)
}

export function onCommentCreated() {
  miro.board.ui.__selectDefaultTool()
}

export async function blinkHotspots() {
  const hotspots = await getHotspots()
  const hotspotstoShow = hotspots.map((h) => ({id: h.id, clientVisible: true}))
  miro.board.widgets.update(hotspotstoShow)
  miro.board.widgets.__blinkWidget(hotspotstoShow)
  setTimeout(() => {
    const hotspotsToHide = hotspots.map((h) => ({id: h.id, clientVisible: false}))
    miro.board.widgets.update(hotspotsToHide)
  }, 500)
}

async function checkAllHotspotsLinks(hotspots: SDK.IShapeWidget[]) {
  const lines = await miro.board.widgets.get<SDK.ILineWidget>({type: 'line'})
  let hotspotsWithoutLinks = hotspots.slice()
  let linkWithoutScreen

  //пробегаться по хотспотам, а не линкам, чтобы убрать все проверки из goToWidgetFromHotspot
  lines.forEach((line) => {
    //for startWidgetId
    const linkedHotspot1 = hotspots.find((h) => h.id === line.startWidgetId)
    if (linkedHotspot1) {
      hotspotsWithoutLinks = hotspotsWithoutLinks.filter((h) => h.id !== linkedHotspot1.id)
    }

    //for endWidgetId
    const linkedHotspot2 = hotspots.find((h) => h.id === line.endWidgetId)
    if (linkedHotspot2) {
      hotspotsWithoutLinks = hotspotsWithoutLinks.filter((h) => h.id === linkedHotspot2.id)
    }

    if ((linkedHotspot1 || linkedHotspot2) && (!line.startWidgetId || !line.endWidgetId)) {
      linkWithoutScreen = line
    }
  })

  if (linkWithoutScreen) {
    miro.showErrorNotification('Please attach link to some screen')
    miro.board.viewport.zoomToObject(linkWithoutScreen)
    return Promise.resolve(false)
  }

  if (hotspotsWithoutLinks.length > 0) {
    miro.showErrorNotification('Please add link to hotspot')
    miro.board.viewport.zoomToObject(hotspotsWithoutLinks[0])
    return Promise.resolve(false)
  }

  return Promise.resolve(true)
}

export async function createStartHotspot() {
  return miro.board.selection.enterSelectWidgetsMode().then(async (res) => {
    if (res.selectedWidgets.length) {
      const screen = res.selectedWidgets[0]
      const flagWidget = (
        await miro.board.widgets.create<SDK.IShapeWidget>({
          type: 'SHAPE',
          y: screen.bounds.y,
          x: screen.bounds.left - 50 - screen.bounds.height * 0.2,
          width: 100,
          height: 100,
          style: {
            backgroundColor: '#f24726',
            backgroundOpacity: 0.25,
            borderOpacity: 1,
            borderStyle: 2,
            borderWidth: 0,
          },
          metadata: {
            [APP_ID]: {
              hotspot: true,
              startHotspot: true,
            },
          },
        } as any)
      )[0]

      await miro.board.widgets.create({
        type: 'LINE',
        startWidgetId: flagWidget.id,
        endWidgetId: screen.id,
        style: {
          lineStartStyle: 0,
          lineEndStyle: 1,
          lineStyle: 2,
          lineType: 2,
        },
      } as any)

      return flagWidget
    } else {
      return undefined
    }
  })
}

export async function createHotspot(pos?: {x: number; y: number}) {
  const width = 152
  const height = 66
  if (!pos) {
    const viewport = await miro.board.viewport.getViewport()
    pos = {
      x: viewport.x + viewport.width / 2 - width / 2,
      y: viewport.y + viewport.height / 2 - height / 2,
    }
  }

  await miro.board.widgets.create({
    metadata: {
      [APP_ID]: {
        hotspot: true,
      },
    },
    type: 'SHAPE',
    x: pos.x,
    y: pos.y,
    style: {
      shapeType: 3,
      backgroundColor: '#2d9bf0',
      backgroundOpacity: 0.5,
      borderColor: 'transparent',
      borderWidth: 2,
      borderOpacity: 1,
      borderStyle: 2,
      fontFamily: 10,
      textColor: '#1a1a1a',
      textAlign: 'c',
      textAlignVertical: 'm',
      fontSize: 17,
      bold: 0,
      italic: 0,
      underline: 0,
      strike: 0,
      highlighting: '',
    },
    createdUserId: '',
    lastModifiedUserId: '',
    width: width,
    height: height,
    rotation: 0,
    text: '',
  } as any)
}

async function getHotspots() {
  const shapes = await miro.board.widgets.get({type: 'shape'})
  return shapes.filter(isHotspotWidget)
}

export async function findAllScreens(): Promise<SDK.IWidget[]> {
  const screensIds: string[] = []
  const allWidgets = await miro.board.widgets.get()
  const hotspots = allWidgets.filter(isHotspotWidget)
  const lines = allWidgets.filter((w) => w.type === 'LINE') as SDK.ILineWidget[]

  lines.forEach((line) => {
    if (hotspots.find((h) => h.id === line.startWidgetId)) {
      if (line.endWidgetId && !screensIds.some((sId) => sId === line.endWidgetId)) {
        screensIds.push(line.endWidgetId)
      }
    }

    if (hotspots.find((h) => h.id === line.endWidgetId)) {
      if (line.startWidgetId && !screensIds.some((sId) => sId === line.startWidgetId)) {
        screensIds.push(line.startWidgetId)
      }
    }
  })

  return allWidgets.filter((w) => screensIds.some((sId) => sId === w.id)).sort((a, b) => a.bounds.x - b.bounds.x)
}

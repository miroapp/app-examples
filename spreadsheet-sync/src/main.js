import Tabletop from 'tabletop'

const ROW_HEIGHT = 30
const ROW_MARGIN = 10
const SPREADSHEET_URL =
  'https://docs.google.com/spreadsheets/d/121-56BwZe8Cws0A8xE_cSGXc64YD_bBPfQM8o2YVnaM/edit?usp=sharing'

miro.onReady(function () {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Import data from spreadsheet',
        svgIcon:
          '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-import" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path></svg>',
        onClick: syncWithSheet,
      },
    },
  })
})

async function syncWithSheet() {
  const appId = await miro.getClientId()
  const items = await Tabletop.init({
    key: SPREADSHEET_URL,
    simpleSheet: true,
  })
  const viewport = await miro.board.viewport.get()
  const maxWidth = Math.max(...items.map((item) => item.rate)) * 2

  items.forEach(async ({role, rate}, i) => {
    rate = parseFloat(rate)

    const shapes = (
      await miro.board.widgets.get({
        type: 'shape',
      })
    ).filter((shape) => !!shape.metadata[appId])
    const shape = shapes.find((shape) => shape.metadata[appId].role === role)
    const width = rate * 2

    if (shape) {
      const x = shape.x - (shape.width - width) / 2
      miro.board.widgets.update([{id: shape.id, text: `${rate}%`, width, x}])
    } else {
      const x = viewport.x + viewport.width / 2 - (maxWidth - width) / 2
      const y = viewport.y + ROW_HEIGHT / 2 + (ROW_HEIGHT + ROW_MARGIN) * i
      miro.board.widgets.create({
        type: 'shape',
        text: `${rate}%`,
        width,
        height: ROW_HEIGHT,
        x,
        y,
        style: {
          borderWidth: 0,
          backgroundColor: '#4262ff',
          fontSize: 8,
          textAlign: 'c',
          textAlignVertical: 'm',
          textColor: '#ffffff',
        },
        metadata: {
          [appId]: {
            role,
          },
        },
      })
      miro.board.widgets.create({
        type: 'text',
        x: viewport.x + viewport.width / 2 - maxWidth - 110,
        y,
        width: 400,
        style: {
          textAlign: 'r',
          fontSize: 12,
        },
        text: role,
        metadata: {
          [appId]: {
            role,
          },
        },
      })
    }
  })
}

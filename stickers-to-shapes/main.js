miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Sticker to shapes',
        svgIcon:
          '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
        positionPriority: 1,
        onClick: async () => {
          // Get selected widgets
          let selectedWidgets = await miro.board.selection.get()

          // Filter stickers from selected widgets
          let stickers = selectedWidgets.filter((widget) => widget.type === 'STICKER')

          // Delete selected stickers
          await miro.board.widgets.deleteById(stickers.map((sticker) => sticker.id))

          // Create shapes from selected stickers
          await miro.board.widgets.create(
            stickers.map((sticker) => ({
              type: 'shape',
              text: sticker.text,
              x: sticker.x,
              y: sticker.y,
              width: sticker.bounds.width,
              height: sticker.bounds.height,
            })),
          )

          // Show success message
          miro.showNotification('Stickers has been converted')
        },
      },
    },
  })
})

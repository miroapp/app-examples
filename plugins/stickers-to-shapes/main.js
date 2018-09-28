rtb.initialize({
  extensionPoints: {
    bottomBar: {
      title: 'Sticker to shapes',
      svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
      positionPriority: 1,
      onClick: async () => {

        // Get selected widgets
        let selectedWidgets = await rtb.board.getSelection()

        // Filter stickers from selected widgets
        let stickers = selectedWidgets.filter(widget => widget.type === 'STICKER')

        // Delete selected stickers
        await rtb.board.deleteById(stickers.map(sticker => sticker.id))

        // Create shapes from selected stickers
        stickers.forEach(async (sticker) => {
          await rtb.board.widgets.shapes.create({
            text: sticker.text,
            x: sticker.x,
            y: sticker.y,
            width: sticker.width,
            height: sticker.height,
          })
        })

        // Show success message
        rtb.showNotification('Stickers has been converted')
      }
    }
  }
})

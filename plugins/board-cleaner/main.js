const icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

rtb.onReady(() => {
  rtb.initialize({
    extensionPoints: {
      bottomBar: {
        title: 'Board cleaner',
        svgIcon: icon,
        onClick: async () => {

          // Show modal and wait for user choice
          let needToClear = confirm('Do you want delete all content?')

          if (needToClear) {
            // Get all board objects
            let objects = await rtb.board.widgets.get()

            // Delete all board objects
            await rtb.board.widgets.deleteById(objects.map(object => object.id))

            // Display success
            rtb.showNotification('Content has been deleted')
          }
        }
      }
    }
  })
})

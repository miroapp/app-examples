let icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

rtb.initialize({
  extensionPoints: {
    bottomBar: {
      title: 'Board cleaner',
      svgIcon: icon,
      positionPriority: 1,
      onClick: async () => {

        // Configure modal options
        let modalOptions = {
          caption: 'Clear comments',
          text: 'Do you want delete all comments?',
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel'
        }

        // Show modal and wait for user choice
        let needToClear = await rtb.board.openConfirmModal(modalOptions)

        if (needToClear) {
          // Get all board objects
          let objects = await rtb.board.comments.get()

          // Delete all board objects
          await rtb.board.deleteById(objects.map(object => object.id))

          // Display success
          rtb.showNotification('Comments has been deleted')
        }
      }
    }
  }
})

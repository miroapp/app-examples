let icon = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

rtb.initialize({
  extensionPoints: {
    bottomBar: {
      title: 'Looking Glass',
      svgIcon: icon,
      positionPriority: 1,
      onClick: () => {
        rtb.board.openLeftSidebar('sidebar.html')
      }
    }
  }
})

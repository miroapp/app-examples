import {EDIT_WIDTH} from 'config'

const icon24 =
  '<g id="icon-24" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
  '        <g id="icon-48" transform="translate(1.000000, 2.000000)" fill="currentColor" fill-rule="nonzero">\n' +
  '            <path d="M10,15 L12.8786797,15 C13.154822,15 13.3786797,14.7761424 13.3786797,14.5 C13.3786797,14.3673918 13.3260012,14.2402148 13.232233,14.1464466 L7.35355339,8.26776695 C6.37724266,7.29145622 6.37724266,5.70854378 7.35355339,4.73223305 C7.82239434,4.2633921 8.45827912,4 9.12132034,4 L13,4 L13,1.28305684 C13,0.73077209 13.4477153,0.283056839 14,0.283056839 C14.1840048,0.283056839 14.3644421,0.333825725 14.52145,0.429775006 L20.6037206,4.14671817 C21.0749752,4.43470705 21.2235413,5.05019547 20.9355525,5.52145001 C20.8528289,5.6568159 20.7390865,5.77055823 20.6037206,5.85328183 L14.52145,9.57022499 C14.0501955,9.85821388 13.4347071,9.70964771 13.1467182,9.23839317 C13.0507689,9.08138526 13,8.90094791 13,8.71694316 L13,6 L9.12132034,6 C8.9887121,6 8.86153514,6.05267842 8.76776695,6.14644661 C8.57250481,6.34170876 8.57250481,6.65829124 8.76776695,6.85355339 L14.6464466,12.732233 C15.1152876,13.201074 15.3786797,13.8369588 15.3786797,14.5 C15.3786797,15.8807119 14.2593915,17 12.8786797,17 L9.99996671,17 L6.20711855,20.7927219 C5.81657341,21.1832069 5.18342659,21.1832069 4.79288145,20.7927219 L0.707118552,16.707095 C0.316575989,16.316589 0.316565449,15.683424 0.70708324,15.2928932 C0.707087164,15.2928893 0.707091087,15.2928854 0.707106781,15.2928932 L4.79289322,11.2071068 C5.18341751,10.8165825 5.81658249,10.8165825 6.20710678,11.2071068 L10,15 Z M15,6.93388632 L18.1645413,5 L15,3.06611368 L15,6.93388632 Z" id="Combined-Shape"></path>\n' +
  '        </g>\n' +
  '    </g>'

miro.onReady(async () => {
  miro.initialize({
    extensionPoints: {
      bottomBar: async () => {
        const permissions = await miro.currentUser.getCurrentBoardPermissions()
        const canEdit = permissions.findIndex((p) => p === 'EDIT_CONTENT') !== -1
        const authorized = await miro.isAuthorized()
        if (authorized && canEdit) {
          return {
            title: 'Prototype',
            svgIcon: icon24,
            onClick: () => {
              miro.board.ui.openBottomPanel('bottom-panel.html', {width: EDIT_WIDTH})
            },
          }
        }
      },
    },
  })

  const params = await miro.board.__getParamsFromURL()
  if (params.runPrototyping) {
    miro.showNotification('Enter prototyping mode...')
    miro.addListener('ALL_WIDGETS_LOADED', async () => {
      miro.__setRuntimeState({enterPrototypingMode: true})
      miro.board.ui.openBottomPanel('bottom-panel.html')
    })
  }
})

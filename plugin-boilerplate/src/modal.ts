require('./styles.css')

const closeButton = document.querySelector('.close-button')

if (closeButton) {
  closeButton.addEventListener('click', () => {
    miro.board.ui.closeModal()
  })
}

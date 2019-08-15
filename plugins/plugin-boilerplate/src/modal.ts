require('./styles.less')

let closeButton = document.querySelector('.close-button')!
closeButton.addEventListener('click', () => {
	miro.board.ui.closeModal()
})

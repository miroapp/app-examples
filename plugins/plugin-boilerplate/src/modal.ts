require('./styles.less')

let closeButton = document.querySelector('.close-button')!
closeButton.addEventListener('click', () => {
	rtb.board.ui.closeModal()
})
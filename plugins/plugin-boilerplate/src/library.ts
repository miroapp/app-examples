require('./styles.less')

// Drag-and-drop example

let imagesSRC = [
	'http://icons.iconarchive.com/icons/iconka/meow/256/cat-walk-icon.png',
	'http://icons.iconarchive.com/icons/iconka/meow-2/256/cat-hungry-icon.png',
	'http://icons.iconarchive.com/icons/iconka/meow/256/cat-tied-icon.png',
	'http://icons.iconarchive.com/icons/iconka/meow/256/cat-grumpy-icon.png',
	'http://icons.iconarchive.com/icons/iconka/meow-2/256/cat-paper-icon.png',
	'http://icons.iconarchive.com/icons/iconka/meow/256/cat-poo-icon.png'
]

function bootstrap() {
	let container = document.querySelector('.cats-container')!
	container.innerHTML = imagesSRC.map(src => `<img class="image-item" src="${src}" data-image-url="${src}">`).join('')
	rtb.helpers.initScrollableContainerWithDraggableImages(container, {draggableImageSelector: '.image-item'})
}

rtb.onReady(bootstrap)
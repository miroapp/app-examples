const ENTER_KEYCODE = 13
const PAGINATION_SCROLL_DELTA = 400
const MAX_OFFSET = 200 // hack to fix endless pagination in the noun project

const scrollableContainer = document.querySelector('.scrollable-container')
const itemsContainer = document.querySelector('.items_container')
const searchInputElement = document.querySelector('.search-input')
const searchButtonElement = document.querySelector('.search-button')
let loading = false
let hasMoreItems = true
let offset = 0
let imagesSources = []

searchInputElement.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    search()
  }
})

searchButtonElement.addEventListener('click', function () {
  search()
})

scrollableContainer.addEventListener('scroll', scrollHandler)

function search() {
  hasMoreItems = true
  offset = 0
  imagesSources = []

  clearIcons()
  loadMoreImages()
}

function showLoader() {
  loading = true
  document.querySelector('.rtb-material-spinner').style.display = 'block'
}

function hideLoader() {
  loading = false
  document.querySelector('.rtb-material-spinner').style.display = 'none'
}

function clearIcons() {
  itemsContainer.innerHTML = ''
}

function showIcons(imagesSources) {
  itemsContainer.innerHTML = imagesSources
    .map(function (src) {
      return '<img class="image-item" src="' + src + '" data-image-url="' + src + '">'
    })
    .join('')
}

function bootstrap() {
  hideLoader()
  // Deprecated - use instead miro.board.ui.initDraggableItemsContainer
  miro.helpers.initScrollableContainerWithDraggableImages(itemsContainer, {draggableImageSelector: '.image-item'})
}

function showNotFoundMessage(query) {
  itemsContainer.innerHTML = '<h3>Icons for "' + query + '" not found</h3>'
}

function showErrorMessage() {
  itemsContainer.innerHTML = '<h3>Something went wrong</h3>'
}

function scrollHandler() {
  const maxScroll = scrollableContainer.scrollHeight - scrollableContainer.offsetHeight
  const currentScroll = scrollableContainer.scrollTop

  if (maxScroll - currentScroll < PAGINATION_SCROLL_DELTA) {
    if (!loading && hasMoreItems) {
      loadMoreImages()
    }
  }
}

function loadMoreImages() {
  const currentQuery = getCurrentQuery()
  showLoader()
  fetch('https://miro.com/thenounproject/?query=' + currentQuery + '&limit=50&offset=' + offset)
    .then(function (response) {
      if (offset < MAX_OFFSET) {
        if (response.status === 200) {
          offset += 50
          return response.json()
        } else if (response.status === 404) {
          if (offset === 0) {
            showNotFoundMessage(currentQuery)
            throw new Error('not found')
          } else {
            hasMoreItems = false
            return {
              icons: [],
            }
          }
        } else {
          showErrorMessage()
          throw new Error('error')
        }
      } else {
        return {
          icons: [],
        }
      }
    })
    .then(function (data) {
      if (data.icons.length > 0) {
        imagesSources = imagesSources.concat(
          data.icons.map(function (icon) {
            return icon.preview_url
          }),
        )
        showIcons(imagesSources)
      } else {
        hasMoreItems = false
      }
    })
    .finally(function () {
      hideLoader()
    })
}

function getCurrentQuery() {
  return searchInputElement.value || 'icon'
}

miro.onReady(bootstrap)

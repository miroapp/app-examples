var images = [
  {src: 'img/Asset_1.svg', width: 267.02, height: 218.31},
  {src: 'img/Asset_11.svg', width: 204.36, height: 375.54},
  {src: 'img/Asset_12.svg', width: 252.37, height: 254.81},
  {src: 'img/Asset_13.svg', width: 262.87, height: 364.2},
  {src: 'img/Asset_14.svg', width: 256.19, height: 365.41},
  {src: 'img/Asset_15.svg', width: 259.2, height: 181.74},
  {src: 'img/Asset_17.svg', width: 255, height: 175.65},
  {src: 'img/Asset_18.svg', width: 249.34, height: 225.69},
  {src: 'img/Asset_19.svg', width: 257.34, height: 305.2},
  {src: 'img/Asset_20.svg', width: 245.67, height: 174.88},
  {src: 'img/Asset_21.svg', width: 263.63, height: 246.18},
  {src: 'img/Asset_22.svg', width: 254.62, height: 334.65},
  {src: 'img/Asset_23.svg', width: 251.08, height: 234.84},
  {src: 'img/Asset_24.svg', width: 251.44, height: 270.31},
  {src: 'img/Asset_25.svg', width: 246.51, height: 278.04},
  {src: 'img/Asset_26.svg', width: 125.58, height: 123.66},
  {src: 'img/Asset_27.svg', width: 109.91, height: 213.59},
  {src: 'img/Asset_28.svg', width: 215.6, height: 156.79},
  {src: 'img/Asset_29.svg', width: 193.6, height: 195.33},
  {src: 'img/Asset_3.svg', width: 239.27, height: 281.26},
  {src: 'img/Asset_32.svg', width: 139.77, height: 150.23},
  {src: 'img/Asset_33.svg', width: 127.36, height: 162.64},
  {src: 'img/Asset_34.svg', width: 163.54, height: 211.2},
  {src: 'img/Asset_35.svg', width: 212.54, height: 93.78},
  {src: 'img/Asset_36.svg', width: 160.19, height: 110.65},
  {src: 'img/Asset_37.svg', width: 188.59, height: 127.25},
  {src: 'img/Asset_38.svg', width: 247.68, height: 473.78},
  {src: 'img/Asset_39.svg', width: 282.79, height: 213.35},
  {src: 'img/Asset_40.svg', width: 228.45, height: 139.07},
  {src: 'img/Asset_41.svg', width: 213.14, height: 168.79},
  {src: 'img/Asset_42.svg', width: 239.71, height: 196.94},
  {src: 'img/Asset_43.svg', width: 174.07, height: 262.56},
  {src: 'img/Asset_45.svg', width: 134.8, height: 118.42},
  {src: 'img/Asset_46.svg', width: 220.27, height: 159.99},
  {src: 'img/Asset_47.svg', width: 137.35, height: 113.94},
  {src: 'img/Asset_48.svg', width: 233.98, height: 277.4},
  {src: 'img/Asset_49.svg', width: 103.23, height: 109.1},
  {src: 'img/Asset_50.svg', width: 234.95, height: 265.47},
  {src: 'img/Asset_51.svg', width: 155.91, height: 133.13},
  {src: 'img/Asset_52.svg', width: 199.46, height: 163.54},
  {src: 'img/Asset_53.svg', width: 224.52, height: 222.51},
  {src: 'img/Asset_54.svg', width: 315.1, height: 278.03},
  {src: 'img/Asset_55.svg', width: 197, height: 85.03},
  {src: 'img/Asset_56.svg', width: 70.92, height: 108.35},
  {src: 'img/Asset_6.svg', width: 265, height: 177.19},
  {src: 'img/Asset_7.svg', width: 215.65, height: 138.67},
  {src: 'img/Asset_8.svg', width: 251.67, height: 266.92},
  {src: 'img/Asset_9.svg', width: 211.51, height: 246.24},
]

function imgToHtmlBox(img) {
  var box =
    '<div class="image-item-box" data-image-url="https://realtimeboard.com/api/awesome-plugins/plugins/rtb_sticker_pack/' +
    img.src +
    '">'
  if (img) {
    //var w = Math.round(image.width)
    //var h = Math.round(image.height)
    //return '<img class="image-item" src="' + image.src + '" width="' + w + '" height="' + h + '">'
    box += '<img src="' + img.src + '">'
  }
  box += '</div>'
  return box
}

function bootstrap() {
  var container = document.getElementById('container')
  var rows = []

  for (var i = 0; i < images.length; i += 2) {
    var row = '<div class="images-row">'
    row += imgToHtmlBox(images[i])
    row += imgToHtmlBox(images[i + 1])
    row += '</div>'
    rows.push(row)
  }
  container.innerHTML = rows.join('')
  miro.helpers.initScrollableContainerWithDraggableImages(container, {draggableImageSelector: '.image-item-box'})
}

miro.onReady(bootstrap)

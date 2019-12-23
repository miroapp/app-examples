import { icon as toFaIcon } from "@fortawesome/fontawesome-svg-core";
import { far as regular } from "@fortawesome/free-regular-svg-icons";
import { fas as solid } from "@fortawesome/free-solid-svg-icons";
import { fab as brands } from "@fortawesome/free-brands-svg-icons";
import svgToDataUrl from "svg-to-dataurl";
import SimpleBar from "simplebar";

import "simplebar/dist/simplebar.css";

const ICONS = {
  regular: Object.values(regular).sort((a, b) => a.iconName - b.iconName),
  solid: Object.values(solid).sort((a, b) => a.iconName - b.iconName),
  brands: Object.values(brands).sort((a, b) => a.iconName - b.iconName)
};
const SELECTED_TYPE_CLASS = "miro-fontawesome-type--selected";
const WIDGET_SCALE = 0.5;

document.querySelector(".miro-fontawesome-types").classList.remove("hidden");
document
  .querySelector(".miro-fontawesome-results__loader")
  .classList.add("hidden");

const input = document.querySelector("input");
const typeElements = document.querySelectorAll(".miro-fontawesome-type");
const resultsContainer = document.querySelector(".miro-fontawesome-results");
const resultsWrapper = document.querySelector(
  ".miro-fontawesome-results-wrapper"
);
const emptyNote = document.querySelector(
  ".miro-fontawesome-results__empty-note"
);

let draggedIcon = null;
let selectedType = document
  .querySelector(".miro-fontawesome-type--selected")
  .getAttribute("data-type");

miro.onReady(() => {
  let viewportScale = 1;

  miro.board.viewport.getZoom().then(scale => {
    viewportScale = scale;
  });

  // Get board's scale when user starts to interact with the app.
  // We track zoom in such a hacky way because of the synchronous
  // nature of getDraggableItemPreview and the lack of zoom events.
  document.body.addEventListener("mouseenter", async () => {
    viewportScale = await miro.board.viewport.getZoom();
  });

  miro.board.ui.initDraggableItemsContainer(resultsContainer, {
    draggableItemSelector: ".miro-fontawesome-results__icon",
    getDraggableItemPreview: container => {
      draggedIcon = container.getAttribute("data-icon");
      const icon = ICONS[selectedType].find(
        icon => icon.iconName === draggedIcon
      );
      const [iconWidth, iconHeight] = icon.icon;
      const encodedIcon = svgToDataUrl(container.innerHTML);
      const previewHeight = iconHeight * viewportScale * WIDGET_SCALE * 1.01;
      return {
        url: encodedIcon,
        height: previewHeight,
        width: (iconWidth / iconHeight) * previewHeight
      };
    },
    onClick: async container => {
      const viewport = await miro.board.viewport.getViewport();
      await createIconWidget(
        selectedType,
        container.getAttribute("data-icon"),
        {
          x: viewport.x + viewport.width / 2,
          y: viewport.y + viewport.height / 2
        }
      );
    },
    onDrop: async (canvasX, canvasY) => {
      await createIconWidget(selectedType, draggedIcon, {
        x: canvasX,
        y: canvasY
      });
    }
  });

  typeElements.forEach(typeElement => {
    typeElement.addEventListener("click", event => {
      selectedType = event.target.getAttribute("data-type");

      typeElements.forEach(typeElement => {
        const elementType = typeElement.getAttribute("data-type");

        if (elementType === selectedType) {
          typeElement.classList.add(SELECTED_TYPE_CLASS);
        } else {
          typeElement.classList.remove(SELECTED_TYPE_CLASS);
        }
      });
      search();
    });
  });

  new SimpleBar(resultsWrapper, { autoHide: false });
  input.addEventListener("input", search);
  search();
});

function search() {
  const query = input.value.toLowerCase();
  const icons = ICONS[selectedType]
    .filter(({ iconName }) => iconName.toLowerCase().includes(query))
    .map(icon => {
      const svg = toSvg(icon);
      const container = document.createElement("div");
      container.className = "miro-fontawesome-results__icon";
      container.innerHTML = svg;
      container.children[0].attributes.class.value = "";
      container.setAttribute("data-icon", icon.iconName);
      container.title = icon.iconName;

      return container;
    });

  const iconsFragment = document.createDocumentFragment();
  icons.forEach(icon => {
    iconsFragment.appendChild(icon);
  });

  resultsContainer.innerHTML = "";
  resultsContainer.appendChild(iconsFragment);

  if (icons.length) {
    emptyNote.classList.add("hidden");
  } else {
    emptyNote.classList.remove("hidden");
  }
}

const svgCache = new Map();
function toSvg(icon) {
  if (!svgCache.has(icon)) {
    svgCache.set(icon, toFaIcon(icon).html[0]);
  }

  return svgCache.get(icon);
}

function getIconUrl(type, name) {
  return `${location.origin}/svgs/${type}/${name}.svg`;
}

async function createIconWidget(type, name, { x, y }) {
  const widgets = await miro.board.widgets.create({
    type: "image",
    x,
    y,
    url: getIconUrl(type, name)
  });
  const scaledWidgets = widgets.map(widget => ({
    id: widget.id,
    scale: WIDGET_SCALE
  }));
  await miro.board.widgets.update(scaledWidgets);
}

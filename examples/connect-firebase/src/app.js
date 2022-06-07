/* global miro */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-DOMAIN.firebaseapp.com",
  databaseURL: "https://YOUR-DOMAIN-rtdb.firebaseio.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR-BUCKET.appspot.com",
  messagingSenderId: "YOUR-SENDER-ID",
  appId: "YOUR-APP-ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function getTemplatesFromDB(userId) {
  const data = await get(ref(db, "templates/" + userId));
  if (data.exists()) {
    return data.val();
  }
  return [];
}

function saveTemplatesToDB(userId, templates) {
  set(ref(db, "templates/" + userId), templates);
}

let templates = [];
let filter = "";

window.saveTemplate = (userId, name, items) => {
  // Calculate center
  let totalX = 0,
    totalY = 0;
  items.forEach((item) => {
    totalX += item.x;
    totalY += item.y;
  });
  const center = { x: totalX / items.length, y: totalY / items.length };

  // Save to the cloud
  templates.push({ name, items, center });
  saveTemplatesToDB(userId, templates);
  displayTemplates(userId, templates);
};

window.deleteTemplate = (userId, index) => {
  templates.splice(index, 1);
  saveTemplatesToDB(userId, templates);
  displayTemplates(userId, templates);
};

function displayTemplates(userId, templates) {
  const templateList = document.getElementById("templates");
  templateList.innerHTML = "";
  templates.forEach((t, i) => {
    if (!t.name.toLowerCase().includes(filter.toLowerCase())) {
      return;
    }
    templateList.innerHTML += `<div class="cs1 ce12 miro-draggable" data-index="${i}" style="padding: 5px; margin: 5px; border: 5px solid black;">
        <h2>${t.name} - <span onclick="deleteTemplate('${userId}', ${i})">x</span></h2>
      </div>`;
  });
}

async function createWidgetFromJson(item, x, y) {
  const clone = Object.assign({}, item, { x: item.x + x, y: item.y + y });
  switch (clone.type) {
    case "card":
      await miro.board.createCard(clone);
      break;
    case "frame":
      await miro.board.createFrame(clone);
      break;
    case "shape":
      await miro.board.createShape(clone);
      break;
    case "sticky_note":
      await miro.board.createStickyNote(clone);
      break;
    case "text":
      await miro.board.createText(clone);
      break;
  }
}

async function init() {
  // Get the user
  const user = await miro.board.getUserInfo();

  // Load templates from the cloud
  templates = await getTemplatesFromDB(user.id);
  displayTemplates(user.id, templates);

  // Save button handler
  document.getElementById("save-btn").onclick = async () => {
    const name = prompt("Please enter a name for the template");
    // Save items
    const items = await miro.board.getSelection();
    // Remove unnecessary properties
    items.forEach((item) => {
      delete item.id;
      delete item.parentId;
      delete item.height; // Note: only save the width and not the height
      delete item.createdAt;
      delete item.createdBy;
      delete item.modifiedAt;
      delete item.modifiedBy;
    });
    window.saveTemplate(user.id, name, items);
  };

  // Search handler
  document.getElementById("search-bar").addEventListener("input", (e) => {
    filter = e.target.value;
    displayTemplates(user.id, templates);
  });

  // Drag-n-drop handler
  miro.board.ui.on("drop", async ({ x, y, target }) => {
    const index = target.getAttribute("data-index");
    const template = templates[index];
    template.items.forEach((item) => {
      createWidgetFromJson(item, x - template.center.x, y - template.center.y);
    });
  });
}

init();

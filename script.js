// Select the page elements used by the app.
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");

const CATEGORY_LABELS = {
  personal: "Personal",
  work: "Work",
  study: "Study",
};

let notes = [];

function render() {
  list.replaceChildren();

  notes.forEach((note) => {
    const card = document.createElement("li");
    card.classList.add("note-card", `category-${note.category}`);

    const content = document.createElement("div");
    content.classList.add("note-content");

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const metadata = document.createElement("div");
    metadata.classList.add("note-meta");

    const category = document.createElement("small");
    category.classList.add("category-label");
    category.textContent = CATEGORY_LABELS[note.category];

    const date = document.createElement("small");
    date.classList.add("note-date");
    date.textContent = note.createdAt;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete note: ${note.text}`);

    metadata.appendChild(category);
    metadata.appendChild(date);
    content.appendChild(text);
    content.appendChild(metadata);
    card.appendChild(content);
    card.appendChild(deleteButton);
    list.appendChild(card);
  });
}

function addNote(text, category) {
  // Keep IDs unique even when two notes are created in the same millisecond.
  let id = Date.now();

  for (const note of notes) {
    if (note.id >= id) {
      id = note.id + 1;
    }
  }

  notes.push({
    id,
    text,
    category,
    createdAt: new Date().toLocaleString(),
  });
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addNote(input.value.trim(), categorySelect.value);
  input.value = "";
  input.focus();
});

render();

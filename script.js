// Select the page elements used by the app.
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const categorySelect = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");
const count = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");
const clearAllButton = document.querySelector("#clear-all");

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
    deleteButton.addEventListener("click", () => deleteNote(note.id));

    metadata.appendChild(category);
    metadata.appendChild(date);
    content.appendChild(text);
    content.appendChild(metadata);
    card.appendChild(content);
    card.appendChild(deleteButton);
    list.appendChild(card);
  });

  if (notes.length === 0) {
    count.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    count.textContent = "You have 1 note.";
  } else {
    count.textContent = `You have ${notes.length} notes.`;
  }

  clearAllButton.disabled = notes.length === 0;
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

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }

  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }

  errorMessage.textContent = "";
  input.removeAttribute("aria-invalid");
  addNote(text, categorySelect.value);
  input.value = "";
  input.focus();
});

// Bonus: cancel leaves every note in place; confirmation deletes them all.
clearAllButton.addEventListener("click", () => {
  if (confirm("Delete all notes?")) {
    notes = [];
    render();
  }
});

render();

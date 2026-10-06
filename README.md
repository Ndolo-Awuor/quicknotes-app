# QuickNotes

QuickNotes is a responsive note-taking web app built with HTML, CSS and JavaScript for Web Foundations Project 1. It lets you capture short notes, organise them into Personal, Work and Study categories, search their text and delete notes you no longer need. Each note shows its creation date and time, and browser storage keeps your notes available after a refresh.

## Features

- Add notes using the Add Note button or Enter.
- Choose Personal, Work or Study, each with its own colour and label.
- Display a readable creation date and time on each note card.
- Reject blank notes and notes longer than 200 characters with clear errors.
- Delete individual notes and see accurate zero, one and many-note counts.
- Search note text without worrying about upper or lower case.
- See "No notes match your search." when a search finds nothing.
- Keep notes after a refresh using localStorage.
- Use the app on desktop or phone screens with a responsive layout.
- Clear all notes after confirming "Delete all notes?"; Cancel keeps them.

The note count always shows the total number of saved notes. Searching filters the visible cards without changing the saved notes.

## How to run locally

1. Clone or download this repository:

   ```bash
   git clone https://github.com/Ndolo-Awuor/quicknotes-app.git
   ```

2. Open the `quicknotes-app` folder in Visual Studio Code.
3. Install the **Live Server** extension by Ritwick Dey if you have not already.
4. Right-click `index.html` and choose **Open with Live Server**.
5. Add a note, select a category and try searching or deleting it.

The project runs as static HTML, CSS and JavaScript. Notes are saved in the current browser for the site address you use; another browser or a different local server port has separate storage.

## What I learned

- How semantic HTML and linked labels make a page easier to use and understand.
- How Flexbox and a media query can switch a form from a row to a column on phones.
- How `querySelector`, `createElement` and `textContent` turn an array of note objects into safe page content.
- How submit and input events work, and why `event.preventDefault()` stops a form reloading the page.
- How `filter()` supports both searching and deleting notes by their unique IDs.
- How `JSON.stringify()` and `JSON.parse()` save and restore data with localStorage.
- How meaningful Git commits record each step of building a project.

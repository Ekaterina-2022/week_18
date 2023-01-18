let userTheme = document.querySelector(".theme");
let userNote = document.querySelector(".note");
let btnSave = document.querySelector(".btn");

function newNote() {
	let keyTheme = userTheme.value + localStorage.length;
	localStorage.setItem(keyTheme, userNote.value);
}

btnSave.addEventListener("click", newNote);

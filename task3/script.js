document.addEventListener("DOMContentLoaded", function () {
	if (localStorage.getItem("name") !== null) {
		document.querySelector(".name-input").value =
			localStorage.getItem("name");
	}
	if (localStorage.getItem("photo") !== null) {
		document.querySelector("#photo-input").value =
			localStorage.getItem("photo");
	}
});

const sendBtn = document.querySelector(".btn");
const messageArea = document.querySelector(".messages");
const newComment = document.querySelector(".user-text");
const btnLogin = document.querySelector(".btn-login");
let arr = ["Hi", "how are you?"];

const checkSpam = () => {
	let a = newComment.value;
	let b = "";
	if (a.includes("viagra")) {
		b = a.replace(/viagra/gi, "***");
		arr.push(b);
	} else if (a.includes("XXX")) {
		b = a.replace("XXX", "***");
		arr.push(b);
	} else {
		arr.push(a);
	}

	newComment.value = "";

	messageArea.innerHTML = arr.join("<br/><hr>");
};
sendBtn.addEventListener("click", checkSpam);

function checkMessage() {
	let userName = document.querySelector(".name-input").value;
	let userPhoto = document.querySelector("#photo-input").value;

	if (localStorage.getItem("name") === null) {
		localStorage.setItem("name", userName);
	}
	if (localStorage.getItem("photo") === null) {
		localStorage.setItem("photo", userPhoto);
	}
}
btnLogin.addEventListener("click", checkMessage);

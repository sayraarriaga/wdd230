const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
	const chapter = input.value;
	input.value = "";

	const listChapter = document.createElement("li");
	const listText = document.createElement("span");
	const listErase = document.createElement("button");

	listChapter.appendChild(listText);
	listText.textContent = chapter;
	listChapter.appendChild(listErase);
	listErase.textContent = "X";
	list.appendChild(listChapter);

	listErase.addEventListener("click", () => {
		list.removeChild(listChapter);
	});

	input.focus();
});
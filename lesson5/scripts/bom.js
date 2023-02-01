const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
	const chapter = input.value;
	input.value = "";

	const listChapter = document.createElement("li");
	const listText = document.createElement("span");
	const listBtn = document.createElement("button");

	listChapter.appendChild(listText);
	listText.textContent = chapter;
	listChapter.appendChild(listBtn);
	listBtn.textContent = "X";
	list.appendChild(listChapter);

	listBtn.addEventListener("click", () => {
		list.removeChild(listChapter);
	});

	input.focus();
});
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBton").classList.toggle("open");
}
const x = document.getElementById("hamburguerBton")
x.onclick = toggleMenu;

const date = new Date().toDateString();
const update = "Last Update";

document.querySelector("#dateholder").textContent = update.textContent = date;

const currenyYear = new Date;
document.querySelector("#year").textContent = currenyYear.getFullYear();


// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);


datefield.innerHTML = `<em>${fulldate}</em>`;


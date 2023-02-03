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



var day = now.getDay();
const message = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
if (day === 1 || day === 2 ){
    document.getElementById("banner").textContent = message;
    document.getElementById("banner").style.display = "block"

} 

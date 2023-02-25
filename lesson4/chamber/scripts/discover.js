const images= document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const imageObserver = new IntersectionObserver((entries, imageObserver) =>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
        
    });

}, imgOptions);

images.forEach(image =>{
    imageObserver.observe(image);
})

// Number of visits

const visitsDisplay = document.querySelector("#visits");


let numberOfVisits = Number(window.localStorage.getItem("visits-ls"));

if (numberOfVisits != 0){
    visitsDisplay.textContent = numberOfVisits;
}
else{
    visitsDisplay.textContent = "This is your first visit!";
}

numberOfVisits++;

localStorage.setItem("visits-ls", numberOfVisits);

// last day 
const lastDay = document.querySelector("#lastVisits");

let today = new Date();
let lastVisit = Number(window.localStorage.getItem("last-visit"));
let daysBetween = (today.getDay() - lastVisit) / 84600000;
let round = Math.round(daysBetween);
lastDay.innerHTML =`${round.toFixed(
	0
)} `;

//const lastDay = document.querySelector("#lastVisits");
//lastDay.textContent = round;




function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburguerBton").classList.toggle("open");
}
const x = document.getElementById("hamburguerBton")
x.onclick = toggleMenu;
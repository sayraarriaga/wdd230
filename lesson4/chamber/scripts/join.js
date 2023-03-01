const date = new Date()

document.getElementById("date").value = date.toDateString();

const time = date.getTime();
document.getElementById("time").value = time;

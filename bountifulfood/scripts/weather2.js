
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,California,&appid=03b7cea2d3e57d537934a6522281b505';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
       console.log(data); // this is for testing the call
         displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}
  
  apiFetch(url);

  // select HTML elements in the document
const minTemp = document.querySelector('.minValues');
const maxTemp = document.querySelector('.maxValues');


  function displayResults(weatherData) {
    for(i=0; i>3; i++){
    minTemp.innerHTML = `Min: <strong>${weatherData.list.main.temp_min.toFixed(0)}</strong>`;
    maxTemp.innerHTML=  `Max :<strong>${weatherData.list.main.temp_max.toFixed(0)}</strong>`;
    
    }
  }

  function getDays(){
    const day = new Date();
    document.querySelector("#day1").textContent = day.getDay() +1;
    document.querySelector("#day2").textContent = day.getDay() +2;
    document.querySelector("#day3").textContent = day.getDay() +3;
  }

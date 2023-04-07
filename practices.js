
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
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


  function displayResults(weatherData) {
    for(i=0; i>3; i++){
    minTemp.innerHTML = `<strong>${weatherData.list.main.temp_min.toFixed(0)}</strong>`;
    windSpeed.innerHTML=  `<strong>${weatherData.list.main.temp_max.toFixed(0)}</strong>`;
    
    
    
  
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list.weather[0].icon}.png`;
    const desc = weatherData.list.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    }
  }

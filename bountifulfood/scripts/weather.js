//current temp

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#windspeed');
const humidity = document.querySelector('#humidity');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,Californis&units=imperial&wind.speed=miles/hour&main.humidity=%&appid=03b7cea2d3e57d537934a6522281b505';

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

 

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML=  `${weatherData.wind.speed}`;
    humidity.innerHTML = `${weatherData.main.humidity}`;
   
    
  
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
  }

  


  
function calculateWindChill(temperature, windSpeed){
  if (temperature <= 50 && windSpeed > 3.0) {
      let windChill = 35.74 +
          0.6215 * temperature -
          35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temperature * Math.pow(windSpeed, 0.16);
      return windChill.toFixed(0);
  } else {
      return "N/A";
  } 
}

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#windspeed');
const windChill = document.querySelector('#windchill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Matamoros&units=imperial&wind.speed=miles/hour&main.feels_like=imperial&appid=03b7cea2d3e57d537934a6522281b505';

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
    windChill.innerHTML = calculateWindChill(weatherData.main.temp,weatherData.wind.speed);
   
    
  
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    
  }

  

  



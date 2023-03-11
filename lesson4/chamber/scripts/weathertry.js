function windChill(number1, number2){
    let wc = 35.74 + 0.6215 * number1 - 35.75 * Math.pow(number2, 0.16) + 0.4275 * number1 * Math.pow(number2, 0.16);
    return wc
}

function getWindChill(){
    let temperature = parseInt(document.querySelector('#temperature').value);
    let windSpeed= parseInt(document.querySelector('#windspeed').value);
    let result = windChill(temperature, windSpeed);
    result = Math.floor(result);
    document.querySelector('#windchill').value = result;
}

document.querySelector('#calculate').addEventListener('click', getWindChill);
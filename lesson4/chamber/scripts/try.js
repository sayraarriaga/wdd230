function windChill(number1, number2){
    let wc = 35.74 + 0.6215 * number1 - 35.75 * Math.pow(number2, 0.16) + 0.4275 * number1 * Math.pow(number2, 0.16);
    return wc
}

function getWindChill(){
    const input1 = document.querySelector("#temperature");
    const input2 = document.querySelector("#windspeed");
    let temperature = parseInt(input1.textContent);
    let windSpeed= parseFloat(input2.textContent);
    let result = windChill(temperature, windSpeed);
    result = Math.floor(result);

    document.querySelector('#windchill').textContent = result;
    }
   


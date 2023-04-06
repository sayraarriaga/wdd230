const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    getNutritions(data);
    let carbohydrate =  carbohydrate = `${data[3].nutritions.carbohydrates}`;
  console.log(carbohydrate);
    
  }
  
  getFruitsData(url);


/*function getNutritions(data){

 let selectValue = parseInt(document.querySelector('#fruits').value);
 let selectValue2 = parseInt(document.querySelector('#fruits2').value);
 let selectValue3 = parseInt(document.querySelector('#fruits3').value);

 let carbohydrate =  carbohydrate = `${data[3].nutritions.carbohydrates}`;
 let carbohydrate2 =  carbohydrate = `${data[selectValue2].nutritions.carbohydrates}`;
 let carbohydrate3 =  carbohydrate = `${data[selectValue3].nutritions.carbohydrates}`;
 console.log(carbohydrate);

  }*/
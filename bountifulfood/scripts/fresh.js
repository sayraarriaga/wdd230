//read the json file
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function getFruitsData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    getNutritions(data);
    
    
  }
  
  getFruitsData(url);

  function getNutritions(data){
    let selectValue = document.getElementById("fruits").value;
    let selectValue2 = document.getElementById("fruits2").value;
    let selectValue3 = document.getElementById("fruits3").value;

    let name = document.getElementById("nameInfo").value;
    let phone = document.getElementById("phoneInfo").value;
    let email = document.getElementById("emailInfo").value;
    let describe = document.getElementById("describe").value;

    document.getElementById("name").innerHTML =`Name: ${name}`;
    document.getElementById("phone").innerHTML =`Phone: ${phone}`;
    document.getElementById("email").innerHTML = `Email: ${email}`;
    document.getElementById("special").innerHTML = describe;
    document.getElementById("1fruit").innerHTML = selectValue;
    document.getElementById("2fruit").innerHTML = selectValue2;
    document.getElementById("3fruit").innerHTML = selectValue3;
    
    
    let carbohydrate = ``;
    let carbohydrate2 = ``;
    let carbohydrate3 = ``;
   
/*get carbohydrates from fruit 1*/
    
    switch(selectValue){
        case 'apple':
            carbohydrate = `${data[0].nutritions.carbohydrates}`;
        break;
        case 'apricot':
            carbohydrate = `${data[1].nutritions.carbohydrates}`;
        break;
        case 'avocado':
            carbohydrate = `${data[2].nutritions.carbohydrates}`;
        break;
        case 'banana':
            carbohydrate = `${data[3].nutritions.carbohydrates}`;
        break;
        case 'blackberry':
            carbohydrate = `${data[4].nutritions.carbohydrates}`;
        break;
        case 'blueberry':
            carbohydrate = `${data[5].nutritions.carbohydrates}`;
        break;
        case 'cherry':
            carbohydrate = `${data[6].nutritions.carbohydrates}`;
        break;
        case 'dragonfruit':
            carbohydrate = `${data[7].nutritions.carbohydrates}`;
        break;
        case 'durian':
            carbohydrate = `${data[8].nutritions.carbohydrates}`;
        break;
        case 'feijoa':
            carbohydrate = `${data[9].nutritions.carbohydrates}`;
        break;
        case 'fig':
            carbohydrate = `${data[10].nutritions.carbohydrates}`;
        break;
        case 'gooseberry':
            carbohydrate = `${data[11].nutritions.carbohydrates}`;
        break;
        case 'grape':
            carbohydrate = `${data[12].nutritions.carbohydrates}`;
        break;
        case 'grapes':
            carbohydrate = `${data[13].nutritions.carbohydrates}`;
        break;
        case 'greenaple':
            carbohydrate = `${data[14].nutritions.carbohydrates}`;
        break;
        case 'guava':
            carbohydrate = `${data[15].nutritions.carbohydrates}`;
        break;
        case 'kiwi':
            carbohydrate = `${data[16].nutritions.carbohydrates}`;
        break;
        case 'kiwifruit':
            carbohydrate = `${data[17].nutritions.carbohydrates}`;
        break;
        case 'lemon':
            carbohydrate = `${data[18].nutritions.carbohydrates}`;
        break;
        case 'lime':
            carbohydrate = `${data[19].nutritions.carbohydrates}`;
        break;
        case 'lingonberry':
            carbohydrate = `${data[20].nutritions.carbohydrates}`;
        break;
        case 'lychee':
            carbohydrate = `${data[21].nutritions.carbohydrates}`;
        break;
        case 'mango':
            carbohydrate = `${data[22].nutritions.carbohydrates}`;
        break;
        case 'melon':
            carbohydrate = `${data[23].nutritions.carbohydrates}`;
        break;
        case 'morus':
            carbohydrate = `${data[24].nutritions.carbohydrates}`;
        break;
        case 'orange':
            carbohydrate = `${data[25].nutritions.carbohydrates}`;
        break;
        case 'papaya':
            carbohydrate = `${data[26].nutritions.carbohydrates}`;
        break;
        case 'pasionfruit':
            carbohydrate = `${data[27].nutritions.carbohydrates}`;
        break;
        case 'pear':
            carbohydrate = `${data[28].nutritions.carbohydrates}`;
        break;
        case 'persimmon':
            carbohydrate = `${data[29].nutritions.carbohydrates}`;
        break;
        case 'pineapple':
            carbohydrate = `${data[30].nutritions.carbohydrates}`;
        break;
        case 'pitahaya':
            carbohydrate = `${data[31].nutritions.carbohydrates}`;
        break;
        case 'plum':
            carbohydrate = `${data[32].nutritions.carbohydrates}`;
        break;
        case 'pomegranate':
            carbohydrate = `${data[33].nutritions.carbohydrates}`;
        break;
        case 'raspberry':
            carbohydrate = `${data[34].nutritions.carbohydrates}`;
        break;
        case 'strawberry':
            carbohydrate = `${data[35].nutritions.carbohydrates}`;
        break;
        case 'tangerine':
            carbohydrate = `${data[35].nutritions.carbohydrates}`;
        break;
        case 'tomato':
            carbohydrate = `${data[36].nutritions.carbohydrates}`;
        break;
        case 'watermelon':
            carbohydrate = `${data[37].nutritions.carbohydrates}`;
        break;


    }
    

/*get carbohydrates from fruit 2 */
switch(selectValue2){
    case 'apple':
        carbohydrate2 = `${data[0].nutritions.carbohydrates}`;
    break;
    case 'apricot':
        carbohydrate2 = `${data[1].nutritions.carbohydrates}`;
    break;
    case 'avocado':
        carbohydrate2 = `${data[2].nutritions.carbohydrates}`;
    break;
    case 'banana':
        carbohydrate2 = `${data[3].nutritions.carbohydrates}`;
    break;
    case 'blackberry':
        carbohydrate2 = `${data[4].nutritions.carbohydrates}`;
    break;
    case 'blueberry':
        carbohydrate2 = `${data[5].nutritions.carbohydrates}`;
    break;
    case 'cherry':
        carbohydrate2 = `${data[6].nutritions.carbohydrates}`;
    break;
    case 'dragonfruit':
        carbohydrate2 = `${data[7].nutritions.carbohydrates}`;
    break;
    case 'durian':
        carbohydrate2 = `${data[8].nutritions.carbohydrates}`;
    break;
    case 'feijoa':
        carbohydrate2 = `${data[9].nutritions.carbohydrates}`;
    break;
    case 'fig':
        carbohydrate2 = `${data[10].nutritions.carbohydrates}`;
    break;
    case 'gooseberry':
        carbohydrate2 = `${data[11].nutritions.carbohydrates}`;
    break;
    case 'grape':
        carbohydrate2 = `${data[12].nutritions.carbohydrates}`;
    break;
    case 'grapes':
        carbohydrate2 = `${data[13].nutritions.carbohydrates}`;
    break;
    case 'greenaple':
        carbohydrate2 = `${data[14].nutritions.carbohydrates}`;
    break;
    case 'guava':
        carbohydrate2 = `${data[15].nutritions.carbohydrates}`;
    break;
    case 'kiwi':
        carbohydrate2 = `${data[16].nutritions.carbohydrates}`;
    break;
    case 'kiwifruit':
        carbohydrate2 = `${data[17].nutritions.carbohydrates}`;
    break;
    case 'lemon':
        carbohydrate2 = `${data[18].nutritions.carbohydrates}`;
    break;
    case 'lime':
        carbohydrate2 = `${data[19].nutritions.carbohydrates}`;
    break;
    case 'lingonberry':
        carbohydrate2 = `${data[20].nutritions.carbohydrates}`;
    break;
    case 'lychee':
        carbohydrate2 = `${data[21].nutritions.carbohydrates}`;
    break;
    case 'mango':
        carbohydrate2 = `${data[22].nutritions.carbohydrates}`;
    break;
    case 'melon':
        carbohydrate2 = `${data[23].nutritions.carbohydrates}`;
    break;
    case 'morus':
        carbohydrate2 = `${data[24].nutritions.carbohydrates}`;
    break;
    case 'orange':
        carbohydrate2 = `${data[25].nutritions.carbohydrates}`;
    break;
    case 'papaya':
        carbohydrate2 = `${data[26].nutritions.carbohydrates}`;
    break;
    case 'pasionfruit':
        carbohydrate2 = `${data[27].nutritions.carbohydrates}`;
    break;
    case 'pear':
        carbohydrate2 = `${data[28].nutritions.carbohydrates}`;
    break;
    case 'persimmon':
        carbohydrate2 = `${data[29].nutritions.carbohydrates}`;
    break;
    case 'pineapple':
        carbohydrate2 = `${data[30].nutritions.carbohydrates}`;
    break;
    case 'pitahaya':
        carbohydrate2 = `${data[31].nutritions.carbohydrates}`;
    break;
    case 'plum':
        carbohydrate2 = `${data[32].nutritions.carbohydrates}`;
    break;
    case 'pomegranate':
        carbohydrate2 = `${data[33].nutritions.carbohydrates}`;
    break;
    case 'raspberry':
        carbohydrate2 = `${data[34].nutritions.carbohydrates}`;
    break;
    case 'strawberry':
        carbohydrate2 = `${data[35].nutritions.carbohydrates}`;
    break;
    case 'tangerine':
        carbohydrate2 = `${data[35].nutritions.carbohydrates}`;
    break;
    case 'tomato':
        carbohydrate2 = `${data[36].nutritions.carbohydrates}`;
    break;
    case 'watermelon':
        carbohydrate2 = `${data[37].nutritions.carbohydrates}`;
    break;
    

}

/*get carbohydrates from fruit 3*/
switch(selectValue3){
    case 'apple':
        carbohydrate3 = `${data[0].nutritions.carbohydrates}`;
    break;
    case 'apricot':
        carbohydrate3 = `${data[1].nutritions.carbohydrates}`;
    break;
    case 'avocado':
        carbohydrate3 = `${data[2].nutritions.carbohydrates}`;
    break;
    case 'banana':
        carbohydrate3 = `${data[3].nutritions.carbohydrates}`;
    break;
    case 'blackberry':
        carbohydrate3 = `${data[4].nutritions.carbohydrates}`;
    break;
    case 'blueberry':
        carbohydrate3 = `${data[5].nutritions.carbohydrates}`;
    break;
    case 'cherry':
        carbohydrate3 = `${data[6].nutritions.carbohydrates}`;
    break;
    case 'dragonfruit':
        carbohydrate3 = `${data[7].nutritions.carbohydrates}`;
    break;
    case 'durian':
        carbohydrate3 = `${data[8].nutritions.carbohydrates}`;
    break;
    case 'feijoa':
        carbohydrate3 = `${data[9].nutritions.carbohydrates}`;
    break;
    case 'fig':
        carbohydrate3 = `${data[10].nutritions.carbohydrates}`;
    break;
    case 'gooseberry':
        carbohydrate3 = `${data[11].nutritions.carbohydrates}`;
    break;
    case 'grape':
        carbohydrate3 = `${data[12].nutritions.carbohydrates}`;
    break;
    case 'grapes':
        carbohydrate3 = `${data[13].nutritions.carbohydrates}`;
    break;
    case 'greenaple':
        carbohydrate3 = `${data[14].nutritions.carbohydrates}`;
    break;
    case 'guava':
        carbohydrate3 = `${data[15].nutritions.carbohydrates}`;
    break;
    case 'kiwi':
        carbohydrate3 = `${data[16].nutritions.carbohydrates}`;
    break;
    case 'kiwifruit':
        carbohydrate3 = `${data[17].nutritions.carbohydrates}`;
    break;
    case 'lemon':
        carbohydrate3 = `${data[18].nutritions.carbohydrates}`;
    break;
    case 'lime':
        carbohydrate3 = `${data[19].nutritions.carbohydrates}`;
    break;
    case 'lingonberry':
        carbohydrate3 = `${data[20].nutritions.carbohydrates}`;
    break;
    case 'lychee':
        carbohydrate3 = `${data[21].nutritions.carbohydrates}`;
    break;
    case 'mango':
        carbohydrate3 = `${data[22].nutritions.carbohydrates}`;
    break;
    case 'melon':
        carbohydrate3 = `${data[23].nutritions.carbohydrates}`;
    break;
    case 'morus':
        carbohydrate3 = `${data[24].nutritions.carbohydrates}`;
    break;
    case 'orange':
        carbohydrate3 = `${data[25].nutritions.carbohydrates}`;
    break;
    case 'papaya':
        carbohydrate3 = `${data[26].nutritions.carbohydrates}`;
    break;
    case 'pasionfruit':
        carbohydrate3 = `${data[27].nutritions.carbohydrates}`;
    break;
    case 'pear':
        carbohydrate3 = `${data[28].nutritions.carbohydrates}`;
    break;
    case 'persimmon':
        carbohydrate3 = `${data[29].nutritions.carbohydrates}`;
    break;
    case 'pineapple':
        carbohydrate3 = `${data[30].nutritions.carbohydrates}`;
    break;
    case 'pitahaya':
        carbohydrate3 = `${data[31].nutritions.carbohydrates}`;
    break;
    case 'plum':
        carbohydrate3 = `${data[32].nutritions.carbohydrates}`;
    break;
    case 'pomegranate':
        carbohydrate3 = `${data[33].nutritions.carbohydrates}`;
    break;
    case 'raspberry':
        carbohydrate3 = `${data[34].nutritions.carbohydrates}`;
    break;
    case 'strawberry':
        carbohydrate3 = `${data[35].nutritions.carbohydrates}`;
    break;
    case 'tangerine':
        carbohydrate3 = `${data[35].nutritions.carbohydrates}`;
    break;
    case 'tomato':
        carbohydrate3 = `${data[36].nutritions.carbohydrates}`;
    break;
    case 'watermelon':
        carbohydrate3 = `${data[37].nutritions.carbohydrates}`;
    break;
    

}

/*PROTEIN*/
let protein = ``;
let protein2 = ``;
let protein3 = ``;

/*get protein from fruit 1*/
    switch(selectValue){
        case 'apple':
            protein = `${data[0].nutritions.protein}`;
        break;
        case 'apricot':
            protein = `${data[1].nutritions.protein}`;
        break;
        case 'avocado':
            protein = `${data[2].nutritions.protein}`;
        break;
        case 'banana':
            protein = `${data[3].nutritions.protein}`;
        break;
        case 'blackberry':
            protein = `${data[4].nutritions.protein}`;
        break;
        case 'blueberry':
            protein = `${data[5].nutritions.protein}`;
        break;
        case 'cherry':
            protein = `${data[6].nutritions.protein}`;
        break;
        case 'dragonfruit':
            protein = `${data[7].nutritions.protein}`;
        break;
        case 'durian':
            protein = `${data[8].nutritions.protein}`;
        break;
        case 'feijoa':
            protein = `${data[9].nutritions.protein}`;
        break;
        case 'fig':
            protein = `${data[10].nutritions.protein}`;
        break;
        case 'gooseberry':
            protein = `${data[11].nutritions.protein}`;
        break;
        case 'grape':
            protein = `${data[12].nutritions.protein}`;
        break;
        case 'grapes':
            protein = `${data[13].nutritions.protein}`;
        break;
        case 'greenaple':
            protein = `${data[14].nutritions.protein}`;
        break;
        case 'guava':
            protein = `${data[15].nutritions.protein}`;
        break;
        case 'kiwi':
            protein = `${data[16].nutritions.protein}`;
        break;
        case 'kiwifruit':
            protein = `${data[17].nutritions.protein}`;
        break;
        case 'lemon':
            protein = `${data[18].nutritions.protein}`;
        break;
        case 'lime':
            protein = `${data[19].nutritions.protein}`;
        break;
        case 'lingonberry':
            protein = `${data[20].nutritions.protein}`;
        break;
        case 'lychee':
            protein = `${data[21].nutritions.protein}`;
        break;
        case 'mango':
            protein = `${data[22].nutritions.protein}`;
        break;
        case 'melon':
            protein = `${data[23].nutritions.protein}`;
        break;
        case 'morus':
            protein = `${data[24].nutritions.protein}`;
        break;
        case 'orange':
            protein = `${data[25].nutritions.protein}`;
        break;
        case 'papaya':
            protein = `${data[26].nutritions.protein}`;
        break;
        case 'pasionfruit':
            protein = `${data[27].nutritions.protein}`;
        break;
        case 'pear':
            protein = `${data[28].nutritions.protein}`;
        break;
        case 'persimmon':
            protein = `${data[29].nutritions.protein}`;
        break;
        case 'pineapple':
            protein = `${data[30].nutritions.protein}`;
        break;
        case 'pitahaya':
            protein = `${data[31].nutritions.protein}`;
        break;
        case 'plum':
            protein = `${data[32].nutritions.protein}`;
        break;
        case 'pomegranate':
            protein = `${data[33].nutritions.protein}`;
        break;
        case 'raspberry':
            protein = `${data[34].nutritions.protein}`;
        break;
        case 'strawberry':
            protein = `${data[35].nutritions.protein}`;
        break;
        case 'tangerine':
            protein = `${data[35].nutritions.protein}`;
        break;
        case 'tomato':
            protein = `${data[36].nutritions.protein}`;
        break;
        case 'watermelon':
            protein = `${data[37].nutritions.protein}`;
        break;
    }
       
     
    
/*get protein from fruit 2 */
switch(selectValue2){
    case 'apple':
        protein2 = `${data[0].nutritions.protein}`;
    break;
    case 'apricot':
        protein2 = `${data[1].nutritions.protein}`;
    break;
    case 'avocado':
        protein2 = `${data[2].nutritions.protein}`;
    break;
    case 'banana':
        protein2 = `${data[3].nutritions.protein}`;
    break;
    case 'blackberry':
        protein2 = `${data[4].nutritions.protein}`;
    break;
    case 'blueberry':
        protein2 = `${data[5].nutritions.protein}`;
    break;
    case 'cherry':
        protein2 = `${data[6].nutritions.protein}`;
    break;
    case 'dragonfruit':
        protein2 = `${data[7].nutritions.protein}`;
    break;
    case 'durian':
        protein2 = `${data[8].nutritions.protein}`;
    break;
    case 'feijoa':
        protein2 = `${data[9].nutritions.protein}`;
    break;
    case 'fig':
        protein2 = `${data[10].nutritions.protein}`;
    break;
    case 'gooseberry':
        protein2 = `${data[11].nutritions.protein}`;
    break;
    case 'grape':
        protein2 = `${data[12].nutritions.protein}`;
    break;
    case 'grapes':
        protein2 = `${data[13].nutritions.protein}`;
    break;
    case 'greenaple':
        protein2 = `${data[14].nutritions.protein}`;
    break;
    case 'guava':
        protein2 = `${data[15].nutritions.protein}`;
    break;
    case 'kiwi':
        protein2 = `${data[16].nutritions.protein}`;
    break;
    case 'kiwifruit':
        protein2 = `${data[17].nutritions.protein}`;
    break;
    case 'lemon':
        protein2 = `${data[18].nutritions.protein}`;
    break;
    case 'lime':
        protein2 = `${data[19].nutritions.protein}`;
    break;
    case 'lingonberry':
        protein2 = `${data[20].nutritions.protein}`;
    break;
    case 'lychee':
        protein2 = `${data[21].nutritions.protein}`;
    break;
    case 'mango':
        protein2 = `${data[22].nutritions.protein}`;
    break;
    case 'melon':
        protein2 = `${data[23].nutritions.protein}`;
    break;
    case 'morus':
        protein2 = `${data[24].nutritions.protein}`;
    break;
    case 'orange':
        protein2 = `${data[25].nutritions.protein}`;
    break;
    case 'papaya':
        protein2 = `${data[26].nutritions.protein}`;
    break;
    case 'pasionfruit':
        protein2 = `${data[27].nutritions.protein}`;
    break;
    case 'pear':
        protein2 = `${data[28].nutritions.protein}`;
    break;
    case 'persimmon':
        protein2 = `${data[29].nutritions.protein}`;
    break;
    case 'pineapple':
        protein2 = `${data[30].nutritions.protein}`;
    break;
    case 'pitahaya':
        protein2 = `${data[31].nutritions.protein}`;
    break;
    case 'plum':
        protein2 = `${data[32].nutritions.protein}`;
    break;
    case 'pomegranate':
        protein = `${data[33].nutritions.protein}`;
    break;
    case 'raspberry':
        protein2 = `${data[34].nutritions.protein}`;
    break;
    case 'strawberry':
        protein2 = `${data[35].nutritions.protein}`;
    break;
    case 'tangerine':
        protein2 = `${data[35].nutritions.protein}`;
    break;
    case 'tomato':
        protein2 = `${data[36].nutritions.protein}`;
    break;
    case 'watermelon':
        protein2 = `${data[37].nutritions.protein}`;
    break;
    default:
        protein2= 0;
}
/*get protein from fruit3*/
switch(selectValue3){
    case 'apple':
        protein3 = `${data[0].nutritions.protein}`;
    break;
    case 'apricot':
        protein3 = `${data[1].nutritions.protein}`;
    break;
    case 'avocado':
        protein3 = `${data[2].nutritions.protein}`;
    break;
    case 'banana':
        protein3 = `${data[3].nutritions.protein}`;
    break;
    case 'blackberry':
        protein3 = `${data[4].nutritions.protein}`;
    break;
    case 'blueberry':
        protein3 = `${data[5].nutritions.protein}`;
    break;
    case 'cherry':
        protein3 = `${data[6].nutritions.protein}`;
    break;
    case 'dragonfruit':
        protein3 = `${data[7].nutritions.protein}`;
    break;
    case 'durian':
        protein3 = `${data[8].nutritions.protein}`;
    break;
    case 'feijoa':
        protein3 = `${data[9].nutritions.protein}`;
    break;
    case 'fig':
        protein3 = `${data[10].nutritions.protein}`;
    break;
    case 'gooseberry':
        protein3 = `${data[11].nutritions.protein}`;
    break;
    case 'grape':
        protein3 = `${data[12].nutritions.protein}`;
    break;
    case 'grapes':
        protein3 = `${data[13].nutritions.protein}`;
    break;
    case 'greenaple':
        protein3 = `${data[14].nutritions.protein}`;
    break;
    case 'guava':
        protein3 = `${data[15].nutritions.protein}`;
    break;
    case 'kiwi':
        protein3 = `${data[16].nutritions.protein}`;
    break;
    case 'kiwifruit':
        protein3 = `${data[17].nutritions.protein}`;
    break;
    case 'lemon':
        protein3 = `${data[18].nutritions.protein}`;
    break;
    case 'lime':
        protein3 = `${data[19].nutritions.protein}`;
    break;
    case 'lingonberry':
        protein3 = `${data[20].nutritions.protein}`;
    break;
    case 'lychee':
        protein3 = `${data[21].nutritions.protein}`;
    break;
    case 'mango':
        protein3 = `${data[22].nutritions.protein}`;
    break;
    case 'melon':
        protein3 = `${data[23].nutritions.protein}`;
    break;
    case 'morus':
        protein3 = `${data[24].nutritions.protein}`;
    break;
    case 'orange':
        protein3 = `${data[25].nutritions.protein}`;
    break;
    case 'papaya':
        protein3 = `${data[26].nutritions.protein}`;
    break;
    case 'pasionfruit':
        protein3 = `${data[27].nutritions.protein}`;
    break;
    case 'pear':
        protein3 = `${data[28].nutritions.protein}`;
    break;
    case 'persimmon':
        protein3 = `${data[29].nutritions.protein}`;
    break;
    case 'pineapple':
        protein3 = `${data[30].nutritions.protein}`;
    break;
    case 'pitahaya':
        protein3 = `${data[31].nutritions.protein}`;
    break;
    case 'plum':
        protein3 = `${data[32].nutritions.protein}`;
    break;
    case 'pomegranate':
        protein3 = `${data[33].nutritions.protein}`;
    break;
    case 'raspberry':
        protein3 = `${data[34].nutritions.protein}`;
    break;
    case 'strawberry':
        protein3 = `${data[35].nutritions.protein}`;
    break;
    case 'tangerine':
        protein3 = `${data[35].nutritions.protein}`;
    break;
    case 'tomato':
        protein3 = `${data[36].nutritions.protein}`;
    break;
    case 'watermelon':
        protein3 = `${data[37].nutritions.protein}`;
    break;
    default:
        protein3= 0;
}

/*FAT*/
let fat = ``;
let fat2 = ``;
let fat3 = ``;

/*get fat from fruit 1*/
switch(selectValue){
case 'apple':
    fat = `${data[0].nutritions.fat}`;
break;
case 'apricot':
    fat = `${data[1].nutritions.fat}`;
break;
case 'avocado':
    fat = `${data[2].nutritions.fat}`;
break;
case 'banana':
    fat = `${data[3].nutritions.fat}`;
break;
case 'blackberry':
    fat = `${data[4].nutritions.fat}`;
break;
case 'blueberry':
    fat = `${data[5].nutritions.fat}`;
break;
case 'cherry':
    fat = `${data[6].nutritions.fat}`;
break;
case 'dragonfruit':
    fat = `${data[7].nutritions.fat}`;
break;
case 'durian':
    fat = `${data[8].nutritions.fat}`;
break;
case 'feijoa':
    fat = `${data[9].nutritions.fat}`;
break;
case 'fig':
    fat = `${data[10].nutritions.fat}`;
break;
case 'gooseberry':
    fat = `${data[11].nutritions.fat}`;
break;
case 'grape':
    fat = `${data[12].nutritions.fat}`;
break;
case 'grapes':
    fat = `${data[13].nutritions.fat}`;
break;
case 'greenaple':
    fat = `${data[14].nutritions.fat}`;
break;
case 'guava':
    fat = `${data[15].nutritions.fat}`;
break;
case 'kiwi':
    fat = `${data[16].nutritions.fat}`;
break;
case 'kiwifruit':
    fat = `${data[17].nutritions.fat}`;
break;
case 'lemon':
    fat = `${data[18].nutritions.fat}`;
break;
case 'lime':
    fat = `${data[19].nutritions.fat}`;
break;
case 'lingonberry':
    fat = `${data[20].nutritions.fat}`;
break;
case 'lychee':
    fat = `${data[21].nutritions.fat}`;
break;
case 'mango':
    fat = `${data[22].nutritions.fat}`;
break;
case 'melon':
    fat = `${data[23].nutritions.fat}`;
break;
case 'morus':
    fat = `${data[24].nutritions.fat}`;
break;
case 'orange':
    fat = `${data[25].nutritions.fat}`;
break;
case 'papaya':
    fat = `${data[26].nutritions.fat}`;
break;
case 'pasionfruit':
    fat = `${data[27].nutritions.fat}`;
break;
case 'pear':
    fat = `${data[28].nutritions.fat}`;
break;
case 'persimmon':
    fat = `${data[29].nutritions.fat}`;
break;
case 'pineapple':
    fat = `${data[30].nutritions.fat}`;
break;
case 'pitahaya':
    fat = `${data[31].nutritions.fat}`;
break;
case 'plum':
    fat = `${data[32].nutritions.fat}`;
break;
case 'pomegranate':
    fat = `${data[33].nutritions.fat}`;
break;
case 'raspberry':
    fat = `${data[34].nutritions.fat}`;
break;
case 'strawberry':
    fat = `${data[35].nutritions.fat}`;
break;
case 'tangerine':
    fat = `${data[35].nutritions.fat}`;
break;
case 'tomato':
    fat = `${data[36].nutritions.fat}`;
break;
case 'watermelon':
    fat = `${data[37].nutritions.fat}`;
break;
}

/*get fat from fruit 2*/
switch(selectValue2){
    case 'apple':
        fat2 = `${data[0].nutritions.fat}`;
    break;
    case 'apricot':
        fat2 = `${data[1].nutritions.fat}`;
    break;
    case 'avocado':
        fat2 = `${data[2].nutritions.fat}`;
    break;
    case 'banana':
        fat2 = `${data[3].nutritions.fat}`;
    break;
    case 'blackberry':
        fat2 = `${data[4].nutritions.fat}`;
    break;
    case 'blueberry':
        fat2 = `${data[5].nutritions.fat}`;
    break;
    case 'cherry':
        fat2 = `${data[6].nutritions.fat}`;
    break;
    case 'dragonfruit':
        fat2 = `${data[7].nutritions.fat}`;
    break;
    case 'durian':
        fat2 = `${data[8].nutritions.fat}`;
    break;
    case 'feijoa':
        fat2 = `${data[9].nutritions.fat}`;
    break;
    case 'fig':
        fat2 = `${data[10].nutritions.fat}`;
    break;
    case 'gooseberry':
        fat2 = `${data[11].nutritions.fat}`;
    break;
    case 'grape':
        fat2 = `${data[12].nutritions.fat}`;
    break;
    case 'grapes':
        fat2 = `${data[13].nutritions.fat}`;
    break;
    case 'greenaple':
        fat2 = `${data[14].nutritions.fat}`;
    break;
    case 'guava':
        fat2 = `${data[15].nutritions.fat}`;
    break;
    case 'kiwi':
        fat2 = `${data[16].nutritions.fat}`;
    break;
    case 'kiwifruit':
        fat2 = `${data[17].nutritions.fat}`;
    break;
    case 'lemon':
        fat2 = `${data[18].nutritions.fat}`;
    break;
    case 'lime':
        fat2 = `${data[19].nutritions.fat}`;
    break;
    case 'lingonberry':
        fat2 = `${data[20].nutritions.fat}`;
    break;
    case 'lychee':
        fat2 = `${data[21].nutritions.fat}`;
    break;
    case 'mango':
        fat2 = `${data[22].nutritions.fat}`;
    break;
    case 'melon':
        fat2 = `${data[23].nutritions.fat}`;
    break;
    case 'morus':
        fat2 = `${data[24].nutritions.fat}`;
    break;
    case 'orange':
        fat2 = `${data[25].nutritions.fat}`;
    break;
    case 'papaya':
        fat2 = `${data[26].nutritions.fat}`;
    break;
    case 'pasionfruit':
        fat2 = `${data[27].nutritions.fat}`;
    break;
    case 'pear':
        fat2 = `${data[28].nutritions.fat}`;
    break;
    case 'persimmon':
        fat2 = `${data[29].nutritions.fat}`;
    break;
    case 'pineapple':
        fat2 = `${data[30].nutritions.fat}`;
    break;
    case 'pitahaya':
        fat2 = `${data[31].nutritions.fat}`;
    break;
    case 'plum':
        fat2 = `${data[32].nutritions.fat}`;
    break;
    case 'pomegranate':
        fat2 = `${data[33].nutritions.fat}`;
    break;
    case 'raspberry':
        fat2 = `${data[34].nutritions.fat}`;
    break;
    case 'strawberry':
        fat2 = `${data[35].nutritions.fat}`;
    break;
    case 'tangerine':
        fat2 = `${data[35].nutritions.fat}`;
    break;
    case 'tomato':
        fat2 = `${data[36].nutritions.fat}`;
    break;
    case 'watermelon':
        fat2 = `${data[37].nutritions.fat}`;
    break;
    }

    /*get fat from fruit 3*/
switch(selectValue3){
    case 'apple':
        fat3 = `${data[0].nutritions.fat}`;
    break;
    case 'apricot':
        fat3 = `${data[1].nutritions.fat}`;
    break;
    case 'avocado':
        fat3 = `${data[2].nutritions.fat}`;
    break;
    case 'banana':
        fat3 = `${data[3].nutritions.fat}`;
    break;
    case 'blackberry':
        fat3 = `${data[4].nutritions.fat}`;
    break;
    case 'blueberry':
        fat3 = `${data[5].nutritions.fat}`;
    break;
    case 'cherry':
        fat3 = `${data[6].nutritions.fat}`;
    break;
    case 'dragonfruit':
        fat3 = `${data[7].nutritions.fat}`;
    break;
    case 'durian':
        fat3 = `${data[8].nutritions.fat}`;
    break;
    case 'feijoa':
        fat3 = `${data[9].nutritions.fat}`;
    break;
    case 'fig':
        fat3 = `${data[10].nutritions.fat}`;
    break;
    case 'gooseberry':
        fat3 = `${data[11].nutritions.fat}`;
    break;
    case 'grape':
        fat3 = `${data[12].nutritions.fat}`;
    break;
    case 'grapes':
        fat3 = `${data[13].nutritions.fat}`;
    break;
    case 'greenaple':
        fat3 = `${data[14].nutritions.fat}`;
    break;
    case 'guava':
        fat3 = `${data[15].nutritions.fat}`;
    break;
    case 'kiwi':
        fat3 = `${data[16].nutritions.fat}`;
    break;
    case 'kiwifruit':
        fat3 = `${data[17].nutritions.fat}`;
    break;
    case 'lemon':
        fat3 = `${data[18].nutritions.fat}`;
    break;
    case 'lime':
        fat3 = `${data[19].nutritions.fat}`;
    break;
    case 'lingonberry':
        fat3 = `${data[20].nutritions.fat}`;
    break;
    case 'lychee':
        fat3 = `${data[21].nutritions.fat}`;
    break;
    case 'mango':
        fat3 = `${data[22].nutritions.fat}`;
    break;
    case 'melon':
        fat3 = `${data[23].nutritions.fat}`;
    break;
    case 'morus':
        fat3 = `${data[24].nutritions.fat}`;
    break;
    case 'orange':
        fat3 = `${data[25].nutritions.fat}`;
    break;
    case 'papaya':
        fat3 = `${data[26].nutritions.fat}`;
    break;
    case 'pasionfruit':
        fat3 = `${data[27].nutritions.fat}`;
    break;
    case 'pear':
        fat3 = `${data[28].nutritions.fat}`;
    break;
    case 'persimmon':
        fat3 = `${data[29].nutritions.fat}`;
    break;
    case 'pineapple':
        fat3 = `${data[30].nutritions.fat}`;
    break;
    case 'pitahaya':
        fat3 = `${data[31].nutritions.fat}`;
    break;
    case 'plum':
        fat3 = `${data[32].nutritions.fat}`;
    break;
    case 'pomegranate':
        fat3 = `${data[33].nutritions.fat}`;
    break;
    case 'raspberry':
        fat3 = `${data[34].nutritions.fat}`;
    break;
    case 'strawberry':
        fat3 = `${data[35].nutritions.fat}`;
    break;
    case 'tangerine':
        fat3 = `${data[35].nutritions.fat}`;
    break;
    case 'tomato':
        fat3 = `${data[36].nutritions.fat}`;
    break;
    case 'watermelon':
        fat3 = `${data[37].nutritions.fat}`;
    break;
    }

/*SUGAR*/
let sugar = ``;
let sugar2 = ``;
let sugar3 = ``;

/*get sugar from fruit 1*/
switch(selectValue){
    case 'apple':
        sugar = `${data[0].nutritions.sugar}`;
    break;
    case 'apricot':
        sugar = `${data[1].nutritions.sugar}`;
    break;
    case 'avocado':
        sugar = `${data[2].nutritions.sugar}`;
    break;
    case 'banana':
        sugar = `${data[3].nutritions.sugar}`;
    break;
    case 'blackberry':
        sugar = `${data[4].nutritions.sugar}`;
    break;
    case 'blueberry':
        sugar= `${data[5].nutritions.sugar}`;
    break;
    case 'cherry':
        sugar = `${data[6].nutritions.sugar}`;
    break;
    case 'dragonfruit':
        sugar = `${data[7].nutritions.sugar}`;
    break;
    case 'durian':
        sugar = `${data[8].nutritions.sugar}`;
    break;
    case 'feijoa':
        sugar = `${data[9].nutritions.sugar}`;
    break;
    case 'fig':
        sugar = `${data[10].nutritions.sugar}`;
    break;
    case 'gooseberry':
        sugar = `${data[11].nutritions.sugar}`;
    break;
    case 'grape':
        sugar = `${data[12].nutritions.sugar}`;
    break;
    case 'grapes':
        sugar = `${data[13].nutritions.sugar}`;
    break;
    case 'greenaple':
        sugar = `${data[14].nutritions.sugar}`;
    break;
    case 'guava':
        sugar = `${data[15].nutritions.sugar}`;
    break;
    case 'kiwi':
        sugar = `${data[16].nutritions.sugar}`;
    break;
    case 'kiwifruit':
        sugar = `${data[17].nutritions.sugar}`;
    break;
    case 'lemon':
        sugar = `${data[18].nutritions.sugar}`;
    break;
    case 'lime':
        sugar = `${data[19].nutritions.sugar}`;
    break;
    case 'lingonberry':
        sugar = `${data[20].nutritions.sugar}`;
    break;
    case 'lychee':
        sugar = `${data[21].nutritions.sugar}`;
    break;
    case 'mango':
        sugar = `${data[22].nutritions.sugar}`;
    break;
    case 'melon':
        sugar = `${data[23].nutritions.sugar}`;
    break;
    case 'morus':
        sugar = `${data[24].nutritions.sugar}`;
    break;
    case 'orange':
        sugar = `${data[25].nutritions.sugar}`;
    break;
    case 'papaya':
        sugar = `${data[26].nutritions.sugar}`;
    break;
    case 'pasionfruit':
        sugar = `${data[27].nutritions.sugar}`;
    break;
    case 'pear':
        sugar= `${data[28].nutritions.sugar}`;
    break;
    case 'persimmon':
        sugar = `${data[29].nutritions.sugar}`;
    break;
    case 'pineapple':
        sugar = `${data[30].nutritions.sugar}`;
    break;
    case 'pitahaya':
        sugar = `${data[31].nutritions.sugar}`;
    break;
    case 'plum':
        sugar= `${data[32].nutritions.sugar}`;
    break;
    case 'pomegranate':
        sugar = `${data[33].nutritions.sugar}`;
    break;
    case 'raspberry':
        sugar = `${data[34].nutritions.sugar}`;
    break;
    case 'strawberry':
        sugar = `${data[35].nutritions.sugar}`;
    break;
    case 'tangerine':
        sugar = `${data[35].nutritions.sugar}`;
    break;
    case 'tomato':
        sugar = `${data[36].nutritions.sugar}`;
    break;
    case 'watermelon':
        sugar = `${data[37].nutritions.sugar}`;
    break;
    }

    /*get sugar from fruit 2*/
switch(selectValue2){
    case 'apple':
        sugar2 = `${data[0].nutritions.sugar}`;
    break;
    case 'apricot':
        sugar2 = `${data[1].nutritions.sugar}`;
    break;
    case 'avocado':
        sugar2 = `${data[2].nutritions.sugar}`;
    break;
    case 'banana':
        sugar2 = `${data[3].nutritions.sugar}`;
    break;
    case 'blackberry':
        sugar2 = `${data[4].nutritions.sugar}`;
    break;
    case 'blueberry':
        sugar2 = `${data[5].nutritions.sugar}`;
    break;
    case 'cherry':
        sugar2 = `${data[6].nutritions.sugar}`;
    break;
    case 'dragonfruit':
        sugar2 = `${data[7].nutritions.sugar}`;
    break;
    case 'durian':
        sugar2 = `${data[8].nutritions.sugar}`;
    break;
    case 'feijoa':
        sugar2 = `${data[9].nutritions.sugar}`;
    break;
    case 'fig':
        sugar2 = `${data[10].nutritions.sugar}`;
    break;
    case 'gooseberry':
        sugar2 = `${data[11].nutritions.sugar}`;
    break;
    case 'grape':
        sugar2 = `${data[12].nutritions.sugar}`;
    break;
    case 'grapes':
        sugar2 = `${data[13].nutritions.sugar}`;
    break;
    case 'greenaple':
        sugar2 = `${data[14].nutritions.sugar}`;
    break;
    case 'guava':
        sugar2 = `${data[15].nutritions.sugar}`;
    break;
    case 'kiwi':
        sugar2 = `${data[16].nutritions.sugar}`;
    break;
    case 'kiwifruit':
        sugar2 = `${data[17].nutritions.sugar}`;
    break;
    case 'lemon':
        sugar2 = `${data[18].nutritions.sugar}`;
    break;
    case 'lime':
        sugar2 = `${data[19].nutritions.sugar}`;
    break;
    case 'lingonberry':
        sugar2 = `${data[20].nutritions.sugar}`;
    break;
    case 'lychee':
        sugar2 = `${data[21].nutritions.sugar}`;
    break;
    case 'mango':
        sugar2 = `${data[22].nutritions.sugar}`;
    break;
    case 'melon':
        sugar2 = `${data[23].nutritions.sugar}`;
    break;
    case 'morus':
        sugar2 = `${data[24].nutritions.sugar}`;
    break;
    case 'orange':
        sugar2 = `${data[25].nutritions.sugar}`;
    break;
    case 'papaya':
        sugar2 = `${data[26].nutritions.sugar}`;
    break;
    case 'pasionfruit':
        sugar2 = `${data[27].nutritions.sugar}`;
    break;
    case 'pear':
        sugar2 = `${data[28].nutritions.sugar}`;
    break;
    case 'persimmon':
        sugar2 = `${data[29].nutritions.sugar}`;
    break;
    case 'pineapple':
        sugar2 = `${data[30].nutritions.sugar}`;
    break;
    case 'pitahaya':
        sugar2 = `${data[31].nutritions.sugar}`;
    break;
    case 'plum':
        sugar2 = `${data[32].nutritions.sugar}`;
    break;
    case 'pomegranate':
        sugar2 = `${data[33].nutritions.sugar}`;
    break;
    case 'raspberry':
        sugar2 = `${data[34].nutritions.sugar}`;
    break;
    case 'strawberry':
        sugar2 = `${data[35].nutritions.sugar}`;
    break;
    case 'tangerine':
        sugar2 = `${data[35].nutritions.sugar}`;
    break;
    case 'tomato':
        sugar2 = `${data[36].nutritions.sugar}`;
    break;
    case 'watermelon':
        sugar2 = `${data[37].nutritions.sugar}`;
    break;
    }

    /*get sugar from fruit 3*/
switch(selectValue3){
    case 'apple':
        sugar3 = `${data[0].nutritions.sugar}`;
    break;
    case 'apricot':
        sugar3 = `${data[1].nutritions.sugar}`;
    break;
    case 'avocado':
        sugar3 = `${data[2].nutritions.sugar}`;
    break;
    case 'banana':
        sugar3 = `${data[3].nutritions.sugar}`;
    break;
    case 'blackberry':
        sugar3 = `${data[4].nutritions.sugar}`;
    break;
    case 'blueberry':
        sugar3= `${data[5].nutritions.sugar}`;
    break;
    case 'cherry':
        sugar3 = `${data[6].nutritions.sugar}`;
    break;
    case 'dragonfruit':
        sugar3 = `${data[7].nutritions.sugar}`;
    break;
    case 'durian':
        sugar3 = `${data[8].nutritions.sugar}`;
    break;
    case 'feijoa':
        sugar3 = `${data[9].nutritions.sugar}`;
    break;
    case 'fig':
        sugar3 = `${data[10].nutritions.sugar}`;
    break;
    case 'gooseberry':
        sugar3 = `${data[11].nutritions.sugar}`;
    break;
    case 'grape':
        sugar3 = `${data[12].nutritions.sugar}`;
    break;
    case 'grapes':
        sugar3 = `${data[13].nutritions.sugar}`;
    break;
    case 'greenaple':
        sugar3 = `${data[14].nutritions.sugar}`;
    break;
    case 'guava':
        sugar3 = `${data[15].nutritions.sugar}`;
    break;
    case 'kiwi':
        sugar3 = `${data[16].nutritions.sugar}`;
    break;
    case 'kiwifruit':
        sugar3 = `${data[17].nutritions.sugar}`;
    break;
    case 'lemon':
        sugar3 = `${data[18].nutritions.sugar}`;
    break;
    case 'lime':
        sugar3 = `${data[19].nutritions.sugar}`;
    break;
    case 'lingonberry':
        sugar3 = `${data[20].nutritions.sugar}`;
    break;
    case 'lychee':
        sugar3 = `${data[21].nutritions.sugar}`;
    break;
    case 'mango':
        sugar3 = `${data[22].nutritions.sugar}`;
    break;
    case 'melon':
        sugar3 = `${data[23].nutritions.sugar}`;
    break;
    case 'morus':
        sugar3 = `${data[24].nutritions.sugar}`;
    break;
    case 'orange':
        sugar3 = `${data[25].nutritions.sugar}`;
    break;
    case 'papaya':
        sugar3 = `${data[26].nutritions.sugar}`;
    break;
    case 'pasionfruit':
        sugar3 = `${data[27].nutritions.sugar}`;
    break;
    case 'pear':
        sugar3= `${data[28].nutritions.sugar}`;
    break;
    case 'persimmon':
        sugar3 = `${data[29].nutritions.sugar}`;
    break;
    case 'pineapple':
        sugar3 = `${data[30].nutritions.sugar}`;
    break;
    case 'pitahaya':
        sugar3 = `${data[31].nutritions.sugar}`;
    break;
    case 'plum':
        sugar3= `${data[32].nutritions.sugar}`;
    break;
    case 'pomegranate':
        sugar3 = `${data[33].nutritions.sugar}`;
    break;
    case 'raspberry':
        sugar3 = `${data[34].nutritions.sugar}`;
    break;
    case 'strawberry':
        sugar3 = `${data[35].nutritions.sugar}`;
    break;
    case 'tangerine':
        sugar3 = `${data[35].nutritions.sugar}`;
    break;
    case 'tomato':
        sugar3= `${data[36].nutritions.sugar}`;
    break;
    case 'watermelon':
        sugar3 = `${data[37].nutritions.sugar}`;
    break;
    }

/*CALORIES*/
let calories = ``;
let calories2 = ``;
let calories3 = ``;

/*Get calories from fruit1 */
switch(selectValue){
    case 'apple':
        calories = `${data[0].nutritions.calories}`;
    break;
    case 'apricot':
        calories = `${data[1].nutritions.calories}`;
    break;
    case 'avocado':
        calories = `${data[2].nutritions.calories}`;
    break;
    case 'banana':
        calories = `${data[3].nutritions.calories}`;
    break;
    case 'blackberry':
        calories = `${data[4].nutritions.calories}`;
    break;
    case 'blueberry':
        calories= `${data[5].nutritions.calories}`;
    break;
    case 'cherry':
        calories = `${data[6].nutritions.calories}`;
    break;
    case 'dragonfruit':
        calories = `${data[7].nutritions.calories}`;
    break;
    case 'durian':
        calories = `${data[8].nutritions.calories}`;
    break;
    case 'feijoa':
        calories = `${data[9].nutritions.calories}`;
    break;
    case 'fig':
        calories = `${data[10].nutritions.calories}`;
    break;
    case 'gooseberry':
        calories = `${data[11].nutritions.calories}`;
    break;
    case 'grape':
        calories = `${data[12].nutritions.calories}`;
    break;
    case 'grapes':
        calories = `${data[13].nutritions.calories}`;
    break;
    case 'greenaple':
        calories = `${data[14].nutritions.calories}`;
    break;
    case 'guava':
        calories = `${data[15].nutritions.calories}`;
    break;
    case 'kiwi':
        calories = `${data[16].nutritions.calories}`;
    break;
    case 'kiwifruit':
        calories = `${data[17].nutritions.calories}`;
    break;
    case 'lemon':
        calories = `${data[18].nutritions.calories}`;
    break;
    case 'lime':
        calories = `${data[19].nutritions.calories}`;
    break;
    case 'lingonberry':
        calories = `${data[20].nutritions.calories}`;
    break;
    case 'lychee':
        calories = `${data[21].nutritions.calories}`;
    break;
    case 'mango':
        calories = `${data[22].nutritions.calories}`;
    break;
    case 'melon':
        calories = `${data[23].nutritions.calories}`;
    break;
    case 'morus':
        calories = `${data[24].nutritions.calories}`;
    break;
    case 'orange':
        calories = `${data[25].nutritions.calories}`;
    break;
    case 'papaya':
        calories = `${data[26].nutritions.calories}`;
    break;
    case 'pasionfruit':
        calories = `${data[27].nutritions.calories}`;
    break;
    case 'pear':
        calories= `${data[28].nutritions.calories}`;
    break;
    case 'persimmon':
        calories = `${data[29].nutritions.calories}`;
    break;
    case 'pineapple':
        calories = `${data[30].nutritions.calories}`;
    break;
    case 'pitahaya':
        calories = `${data[31].nutritions.calories}`;
    break;
    case 'plum':
        calories= `${data[32].nutritions.calories}`;
    break;
    case 'pomegranate':
        calories = `${data[33].nutritions.calories}`;
    break;
    case 'raspberry':
        calories = `${data[34].nutritions.calories}`;
    break;
    case 'strawberry':
        calories = `${data[35].nutritions.calories}`;
    break;
    case 'tangerine':
        calories = `${data[35].nutritions.calories}`;
    break;
    case 'tomato':
        calories = `${data[36].nutritions.calories}`;
    break;
    case 'watermelon':
        calories = `${data[37].nutritions.sugar}`;
    break;
    }


    /*Get calories from fruit1 */
switch(selectValue2){
    case 'apple':
        calories2 = `${data[0].nutritions.calories}`;
    break;
    case 'apricot':
        calories2 = `${data[1].nutritions.calories}`;
    break;
    case 'avocado':
        calories2 = `${data[2].nutritions.calories}`;
    break;
    case 'banana':
        calories2 = `${data[3].nutritions.calories}`;
    break;
    case 'blackberry':
        calories2 = `${data[4].nutritions.calories}`;
    break;
    case 'blueberry':
        calories2= `${data[5].nutritions.calories}`;
    break;
    case 'cherry':
        calories2 = `${data[6].nutritions.calories}`;
    break;
    case 'dragonfruit':
        calories2 = `${data[7].nutritions.calories}`;
    break;
    case 'durian':
        calories2 = `${data[8].nutritions.calories}`;
    break;
    case 'feijoa':
        calories2 = `${data[9].nutritions.calories}`;
    break;
    case 'fig':
        calories2 = `${data[10].nutritions.calories}`;
    break;
    case 'gooseberry':
        calories2 = `${data[11].nutritions.calories}`;
    break;
    case 'grape':
        calories2 = `${data[12].nutritions.calories}`;
    break;
    case 'grapes':
        calories2 = `${data[13].nutritions.calories}`;
    break;
    case 'greenaple':
        calories2 = `${data[14].nutritions.calories}`;
    break;
    case 'guava':
        calories2 = `${data[15].nutritions.calories}`;
    break;
    case 'kiwi':
        calories2 = `${data[16].nutritions.calories}`;
    break;
    case 'kiwifruit':
        calories2 = `${data[17].nutritions.calories}`;
    break;
    case 'lemon':
        calories2 = `${data[18].nutritions.calories}`;
    break;
    case 'lime':
        calories2 = `${data[19].nutritions.calories}`;
    break;
    case 'lingonberry':
        calories2 = `${data[20].nutritions.calories}`;
    break;
    case 'lychee':
        calories2 = `${data[21].nutritions.calories}`;
    break;
    case 'mango':
        calories2 = `${data[22].nutritions.calories}`;
    break;
    case 'melon':
        calories2 = `${data[23].nutritions.calories}`;
    break;
    case 'morus':
        calories2 = `${data[24].nutritions.calories}`;
    break;
    case 'orange':
        calories2 = `${data[25].nutritions.calories}`;
    break;
    case 'papaya':
        calories2 = `${data[26].nutritions.calories}`;
    break;
    case 'pasionfruit':
        calories2 = `${data[27].nutritions.calories}`;
    break;
    case 'pear':
        calories2= `${data[28].nutritions.calories}`;
    break;
    case 'persimmon':
        calories2 = `${data[29].nutritions.calories}`;
    break;
    case 'pineapple':
        calories2 = `${data[30].nutritions.calories}`;
    break;
    case 'pitahaya':
        calories2 = `${data[31].nutritions.calories}`;
    break;
    case 'plum':
        calories2 = `${data[32].nutritions.calories}`;
    break;
    case 'pomegranate':
        calories2 = `${data[33].nutritions.calories}`;
    break;
    case 'raspberry':
        calories2 = `${data[34].nutritions.calories}`;
    break;
    case 'strawberry':
        calories2 = `${data[35].nutritions.calories}`;
    break;
    case 'tangerine':
        calories2 = `${data[35].nutritions.calories}`;
    break;
    case 'tomato':
        calories2 = `${data[36].nutritions.calories}`;
    break;
    case 'watermelon':
        calories2 = `${data[37].nutritions.sugar}`;
    break;
    }

    /*Get calories from fruit3 */
switch(selectValue3){
    case 'apple':
        calories3 = `${data[0].nutritions.calories}`;
    break;
    case 'apricot':
        calories3 = `${data[1].nutritions.calories}`;
    break;
    case 'avocado':
        calories3 = `${data[2].nutritions.calories}`;
    break;
    case 'banana':
        calories3 = `${data[3].nutritions.calories}`;
    break;
    case 'blackberry':
        calories3 = `${data[4].nutritions.calories}`;
    break;
    case 'blueberry':
        calories3= `${data[5].nutritions.calories}`;
    break;
    case 'cherry':
        calories3 = `${data[6].nutritions.calories}`;
    break;
    case 'dragonfruit':
        calories3 = `${data[7].nutritions.calories}`;
    break;
    case 'durian':
        calories3 = `${data[8].nutritions.calories}`;
    break;
    case 'feijoa':
        calories3 = `${data[9].nutritions.calories}`;
    break;
    case 'fig':
        calories3 = `${data[10].nutritions.calories}`;
    break;
    case 'gooseberry':
        calories3 = `${data[11].nutritions.calories}`;
    break;
    case 'grape':
        calories3 = `${data[12].nutritions.calories}`;
    break;
    case 'grapes':
        calories3 = `${data[13].nutritions.calories}`;
    break;
    case 'greenaple':
        calories3 = `${data[14].nutritions.calories}`;
    break;
    case 'guava':
        calories3 = `${data[15].nutritions.calories}`;
    break;
    case 'kiwi':
        calories3 = `${data[16].nutritions.calories}`;
    break;
    case 'kiwifruit':
        calories3 = `${data[17].nutritions.calories}`;
    break;
    case 'lemon':
        calories3 = `${data[18].nutritions.calories}`;
    break;
    case 'lime':
        calories3 = `${data[19].nutritions.calories}`;
    break;
    case 'lingonberry':
        calories3 = `${data[20].nutritions.calories}`;
    break;
    case 'lychee':
        calories3 = `${data[21].nutritions.calories}`;
    break;
    case 'mango':
        calories3 = `${data[22].nutritions.calories}`;
    break;
    case 'melon':
        calories3 = `${data[23].nutritions.calories}`;
    break;
    case 'morus':
        calories3 = `${data[24].nutritions.calories}`;
    break;
    case 'orange':
        calories3 = `${data[25].nutritions.calories}`;
    break;
    case 'papaya':
        calories3 = `${data[26].nutritions.calories}`;
    break;
    case 'pasionfruit':
        calories3 = `${data[27].nutritions.calories}`;
    break;
    case 'pear':
        calories3 = `${data[28].nutritions.calories}`;
    break;
    case 'persimmon':
        calories3 = `${data[29].nutritions.calories}`;
    break;
    case 'pineapple':
        calories3 = `${data[30].nutritions.calories}`;
    break;
    case 'pitahaya':
        calories3 = `${data[31].nutritions.calories}`;
    break;
    case 'plum':
        calories3= `${data[32].nutritions.calories}`;
    break;
    case 'pomegranate':
        calories3 = `${data[33].nutritions.calories}`;
    break;
    case 'raspberry':
        calories3 = `${data[34].nutritions.calories}`;
    break;
    case 'strawberry':
        calories3 = `${data[35].nutritions.calories}`;
    break;
    case 'tangerine':
        calories3 = `${data[35].nutritions.calories}`;
    break;
    case 'tomato':
        calories3 = `${data[36].nutritions.calories}`;
    break;
    case 'watermelon':
        calories3 = `${data[37].nutritions.sugar}`;
    break;
    }

const totalCarb = carbohydrate + carbohydrate2 + carbohydrate3;
const totalProtein = protein + protein2 + protein3;
const totalFat = fat + fat2 +fat3;
const totalSugar = sugar + sugar2 +sugar3;
const totalCalories = calories + calories2 + calories3;

document.getElementById("nutriInfo").innerHTML = `Nutritional Information`;
document.getElementById("totalCarb").innerHTML = `Total Carbs ${totalCarb}`;
document.getElementById("totalProtein").innerHTML = `Total Protein ${totalProtein}`;
document.getElementById("totalFat").innerHTML = `Total Fat ${totalFat}`;
document.getElementById("totalSugar").innerHTML = `Total Sugar ${totalSugar}`;
document.getElementById("totalCalories").innerHTML = `Total Calories ${totalCalories}`;
  }
  document.querySelector('#submitBton').addEventListener('click', getNutritions);
  

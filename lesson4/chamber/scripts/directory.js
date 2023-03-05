const url = 'https://sayraarriaga.github.io/wdd230/lesson4/chamber/scripts/data.json';

async function getCompaniesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    displayCompanies(data.companies);
  }
  
  getCompaniesData(url);

  const displayCompanies = (companies) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    companies.forEach((companie) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let adress = document.createElement('p');
      let phone = document.createElement('p');
      let websiteurl = document.createElement('a');
      let membershipl = document.createElement('p')
      let logo = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${companie.name}`;
      adress.textContent = ` ${companie.adresses}`;
      phone.textContent = `${companie.phone}`;
      websiteurl.textContent = `${companie.websiteurl}`;
      membershipl.textContent = `${companie.membershipl}`;
      

      
  
      // Build the image portrait by setting all the relevant attribute
      logo.setAttribute('src', companie.imagefile);
      logo.setAttribute('alt', `Portait of ${companie.name}`);
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '250');
      logo.setAttribute('height', '300');
      membershipl.setAttribute('href', companie.websiteurl);
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(adress);
      card.appendChild(phone);
      card.appendChild(websiteurl);
      card.appendChild(membershipl);
      card.appendChild(logo)
      
  
      cards.appendChild(card);

      

    }); // end of forEach loop
  }; // end of function expression


  const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div.cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

 
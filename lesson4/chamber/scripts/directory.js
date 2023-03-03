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
  
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let adress = document.createElement('p');
      let phone = document.createElement('p');
      let websiteurl = document.createElement('a');
      let membershipl = document.createElement('p')
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${company.name}`;
      adress.textContent = ` ${company.adress}`;
      phone.textContent = `${company.phone}`;
      websiteurl.textContent = `${company.websiteurl}`;
      membershipl.textContent = `${company.membershipl}`;
      

      
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', company.imagefile);
      portrait.setAttribute('alt', `Portait of ${company.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(adress);
      card.appendChild(phone);
      card.appendChild(websiteurl);
      card.appendChild(membershipl);
      
  
      cards.appendChild(card);
    }); // end of forEach loop
  }; // end of function expression

 
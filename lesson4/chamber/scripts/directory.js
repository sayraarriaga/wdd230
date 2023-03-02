const url = 'data.json';

async function getCompaniesData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    //displayProphets(data.prophets);
  }
  
  getCompaniesData(url);
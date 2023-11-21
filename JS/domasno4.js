// Array na Gradovi
const cities = [
    { name: "New York City", population: 8538000 },
    { name: "Tokyo", population: 9273000 },
    { name: "London", population: 8908000 },
    { name: "Alexandria", population: 3811516 },
    { name: "Ankara", population: 3517182 },
    { name: "Adelaide", population: 1225235 },
    { name: "Mumbai", population: 12500000 },

   
  ];
  
  // Gradovi sho imaat populacija nad 1 million so bukvata A
  const filteredCities = cities.filter(city => city.name.startsWith("A") && city.population > 1000000);
  
  // Sortiraj Gradovi po populacija
  const sortedCitiesByPopulation = cities.sort((a, b) => b.population - a.population);
  
  // Trite naj naseleni gradovi
  const top3Cities = sortedCitiesByPopulation.slice(0, 3);
  
  console.log("Gradovi sto pocinjaat so 'A' i imaat naselba nad 1 milion:", filteredCities);
  console.log("Trite naj naseleni gradovi se:", top3Cities);
  console.log("Gradovi sortirani vo zavisnost od populacija:", sortedCitiesByPopulation);

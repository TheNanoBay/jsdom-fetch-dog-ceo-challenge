


const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
fetch(url)
  .then(function(response){
    return response.json()
  }).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}``


//-------------------------------------------------


const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov

getJSON(url).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}``





function getJSON(url){
    //const currentUrl = url;
    
    fetch(url)
    .then(function(response){
        return response.json()
    })

}
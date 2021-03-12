var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector("#search-input").value;
    
    console.log(searchInputVal);

    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    searchGeocode(searchInputVal);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

searchGeocode(searchInputVal);


// PRINTING THE RESULTS - 2 STEPS

// Retrieved city name object will have the coordinates property that will be used to retrieve the weather and forecast objects simultaneously.

// First the city name will become another search button with a coordinate property to submit to the API.

function printCityNameResults(resultObj) {
  console.log(resultObj)};

  var cityList = document.querySelector("#result-log");
  var resultBtn = document.createElement("button");
  resultBtn.classList.add("btn", "btn-secondary", "btn-lg", "btn-block");
  resultBtn.value = resultObj[i].name;
  cityList.appendChild(resultBtn); 

// Second; once we cliick the city name button these two datasets will be retrieved and printed on screen.
function printWeatherResults(resultObj) {
    console.log(resultObj)};
    
function printForecastResults(resultObj) {
    console.log(resultObj)};



// SEARCHING THE API - 2 STEPS

// Search for coordinates from Geocode:

function searchGeocode(cityName) {
    var geocodeUrl = "http://api.openweathermap.org/geo/1.0/direct?&appid=26361e188cd235438e3f1a2b81fff3d0";
  
    if (cityName) {
      geocodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=3&appid=26361e188cd235438e3f1a2b81fff3d0";
    }
    
    console.log(geocodeUrl);

    // EXAMPLE and it shows on browser
    // "http://api.openweathermap.org/geo/1.0/direct?q=chapel+hill&limit=3&appid=26361e188cd235438e3f1a2b81fff3d0"

    fetch(geocodeUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
  
      .then(function (geocodeResult) {
        
        console.log(geocodeResult);
  
        if (!geocodeResult.length) {
            console.log('No results found!');
        } else {
            // resultContentEl.textContent = '';
            for (var i = 0; i < geocodeResult.length; i++) {
              printCityNameResults(geocodeResult[i].name);
            }
        }
      })
              
}

// Search for weather and forecast from One Call API:

function searchOneCall(lat, lon) {
    var oneCallUrl = "http://api.openweathermap.org/data/2.5/onecall?&appid=26361e188cd235438e3f1a2b81fff3d0";
  
    // var lat = geocodeResult

    if (lat, lon) {
      oneCallUrl = "http://api.openweathermap.org/geo/1.0/direct?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=26361e188cd235438e3f1a2b81fff3d0";
    }
    
    // EXAMPLE and it shows on browser
    // "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=26361e188cd235438e3f1a2b81fff3d0"

}

searchGeocode();
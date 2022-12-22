// VARIABLES FOR GEOLOCATION API 
//       - city name 
//       VARIABLE FOR WEATHER API
//       - the starting date variable
//       - the duration of days variable
//       - the coordinates of the city
//       VARIABLE FOR MAPPING API 
//       - geolocation api stored variable for coordinates for two locations


var test = document.getElementById("test");

//this function is going to verify that the user entered the city name correctly and also fetch an API response of which we will grab the lat and lon coordinates
function cityCoordinates() {
    //here we are declaring a variable that is where the user will enter the city name
    var cityName = 'seattle';
    var state = 'WA';
    var lonCoord = 0;
    var latCoord = 0;
    var APIKey = '4ef3772979be6dce53798914fca77969';

    //this is to ensure that the user 
    // if (cityName == "" || isNaN(cityName)) {

    // }

    var queryURLCoordinates = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + ',' + state + ',US&appid=' + APIKey;

    fetch(queryURLCoordinates)
        .then(response => response.json())

        .then(data => {
            lonCoord = data[0].lon;
            latCoord = data[0].lat;
            console.log(lonCoord);
            console.log(latCoord);

        })

        .catch(function (error) {
            console.error(error);
        });


};

test.addEventListener('click', cityCoordinates);

//in this function we are going to fetch the api response that we will use to give a weather forecast for each city
function cityWeather() {

    var startDate = document.getElementById("");

    //i think we might have to do some work to translate the date variable into either UNIX time (that is, seconds since midnight GMT on 1 Jan 1970) or a string formatted as follows: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS][timezone].
    var lengthOfStay = document.getElementById("");
    var date;
    var APIKey = '30f72d6795msh68cc89a67fcb9e7p1c5c49jsn45bfacd7bd58';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '30f72d6795msh68cc89a67fcb9e7p1c5c49jsn45bfacd7bd58',
            'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
        }
    };


    fetch('https://dark-sky.p.rapidapi.com/' + latCoord + ',' + lonCoord + ',' + date + '?units=uk2', options)
        .then(response => response.json())
        .then(data => {

        })
        .catch(err => console.error(err));



}
const addStopBtn = document.querySelector("#add-stop-btn");
const formEl = document.querySelector("form");
const inputRowEl = document.querySelectorAll("#input-row");
const buttonContainer = document.querySelector("#btn-container");

const insertInputRow = function (event) {
    event.preventDefault();

    const newInputRow = document.createElement("div");
    newInputRow.classList = "row";
    newInputRow.id = "input-row";
    newInputRow.innerHTML =
        `<div class="input-field col s6">
            <label label for= "stop-1" >
                Stop 1:
            </label >
            <input type="text" name="stop-1" placeholder="City">
        </div>
        <div class="input-field col s6">
            <label for="starting-point">
                Length of Stay (day):
            </label>
        <input type="number" name="days-1" placeholder="How many days">
        </div>`
    formEl.insertBefore(newInputRow, buttonContainer);
}

addStopBtn.addEventListener("click", insertInputRow)
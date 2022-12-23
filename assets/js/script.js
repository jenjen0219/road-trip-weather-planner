// VARIABLES FOR GEOLOCATION API
//       - city name
//       VARIABLE FOR WEATHER API
//       - the starting date variable
//       - the duration of days variable
//       - the coordinates of the city
//       VARIABLE FOR MAPPING API
//       - geolocation api stored variable for coordinates for two locations


//this function is going to verify that the user entered the city name correctly and also fetch an API response of which we will grab the lat and lon coordinates
function cityCoordinates () {
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
var test = document.getElementById("save-btn");

//in this function we are going to fetch the api response that we will use to give a weather forecast for each city
function cityWeather() {

    var departDate = document.getElementById("departure-date").val();

    //this is rearranging our date to the format accepetted by the weather api 
    const unformattedDate = departDate.split('/');
    const formattedDate = unformattedDate[2] + "-" + unformattedDate[0] + "-" + unformattedDate[1];
    //i think we might have to do some work to translate the date variable into either UNIX time (that is, seconds since midnight GMT on 1 Jan 1970) or a string formatted as follows: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS][timezone].
    // var lengthOfStay = document.getElementById("");
    var date = formattedDate + 'T12:00:00';
    var APIKey = '30f72d6795msh68cc89a67fcb9e7p1c5c49jsn45bfacd7bd58';

    var lonCoord = -122.335167;
    var latCoord = 47.608013;
    var tempMin;
    var tempMax;

    var humidity;
    var windSpeed;


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
            tempMin = daily.data[0].temperatureMin;
            tempMax = daily.data[0].temperatureMax;
            humidity = daily.data[0].humidity;
            windSpeed = daily.data[0].windspeed;

            console.log(tempMin, tempMax, humidity, windSpeed);

        })
        .catch(err => console.error(err));



};


function cityMapping(event) {
    event.preventDefault();
    var lonCoord = -122.335167;
    var latCoord = 47.608013;

    var coord = latCoord + ',' + lonCoord
    var testest;

    var origin = coord;
    var destinations = '40.630099,-73.993521;40.644895,-74.013818;40.627177,-73.980853';
    var testduration;
    var testdistance;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '30f72d6795msh68cc89a67fcb9e7p1c5c49jsn45bfacd7bd58',
            'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
        }
    };

    fetch('https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=' + origin + '&destinations=' + destinations, options)
        .then(response => response.json())
        .then(data => {
            testdistance = data.distances[0];
            testduration = data.durations[0];

            testest = testdistance[0];
            console.log(testest);

            console.log(typeof testdistance);
            console.log(testdistance);
            console.log(coord);
        })
        .catch(err => console.error(err));

    var testingEl = document.getElementById("testContainer")

    console.log(testingEl.childElementCount);

};

test.addEventListener('click', cityMapping);

// Save reference to important DOM elements.
const formEl = document.querySelector("form");
const buttonContainer = document.querySelector("#btn-container");
const addStopBtn = document.querySelector("#add-stop-btn");
const resetBtn = document.querySelector("#reset-btn");

// The insertInputRow function creates a new input row in the form.
const insertInputRow = function (event) {
    event.preventDefault();

    const inputRowEl = document.querySelectorAll("#input-row");

    const lastStopNum = parseInt(inputRowEl[inputRowEl.length - 1].children[0].innerText.substring(5));
    const newStopNum = lastStopNum + 1;

    const newInputRow = document.createElement("div");
    newInputRow.classList = "row";
    newInputRow.id = "input-row";
    newInputRow.innerHTML =
        `    <p>Stop ${newStopNum}</p>
    <div class="input-field col s4">
        <label class="active" for="city-${newStopNum}">
            City:
        </label>
        <input type="text" name="city-${newStopNum}" placeholder="e.g. Missoula">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-${newStopNum}">
            State:
        </label>
        <input type="text" name="state-${newStopNum}" placeholder="e.g. Montana">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-${newStopNum}">
            Length of Stay (day):
        </label>
        <input type="number" min="0" name="days-${newStopNum}" placeholder="How many days">
    </div>`
    formEl.insertBefore(newInputRow, buttonContainer);
}

// The resetForm function resets the form to its default format.
const resetForm = function (event) {
    event.preventDefault();

    formEl.innerHTML = "";
    formEl.innerHTML =
        `    <div class="row" id="input-row">
    <p>Depareture Date</p>
    <div class="input-field col s12">
        <input id="departure-date" type="date" name="departure-date" class="validate">
    </div>
</div>

<div class="row" id="input-row">
    <p>Starting Point</p>
    <div class="input-field col s4">
        <label class="active" for="city-0">
            City:
        </label>
        <input type="text" name="city-0" placeholder="e.g. Seattle">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-0">
            State:
        </label>
        <input type="text" name="state-0" placeholder="e.g. Washington">
    </div>
    <div class="input-field col s4">
        <label class="active" for="day-0">
            Length of Stay (day):
        </label>
        <input type="number" min="0" name="day-0" placeholder="How many days">
    </div>
</div>

<div class="row" id="input-row">
    <p>Stop 1</p>
    <div class="input-field col s4">
        <label class="active" for="city-1">
            City:
        </label>
        <input type="text" name="city-1" placeholder="e.g. Missoula">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-1">
            State:
        </label>
        <input type="text" name="state-1" placeholder="e.g. Montana">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-1">
            Length of Stay (day):
        </label>
        <input type="number" min="0" name="days-1" placeholder="How many days">
    </div>
</div>

<div class="row" id="btn-container">
    <button class="button" id="add-stop-btn">+ Add Stop</button>
    <button class="button" id="reset-btn">Reset Form</button>
    <button class="button" id="save-btn" type="submit">Save</button>
</div>`
}


for (i = 0; i < testingEl.childElementCount;i++) {
        var cityName = document.getElementById("cityName"[i]);
        var los = document.getElementById("los"[i]);


        

}

// The insertInputRow function is called when the add stop button is clicked.
addStopBtn.addEventListener("click", insertInputRow);
// The resetForm function is called when the reset form button is clicked.
resetBtn.addEventListener("click", resetForm);


// Save reference to important DOM elements.
const formEl = document.querySelector("form");
const buttonContainer = document.querySelector("#btn-container");
const addStopBtn = document.querySelector("#add-stop-btn");
const resetBtn = document.querySelector("#reset-btn");
const saveBtn = document.querySelector("#save-btn");

// Populate the list of autocomplete options in the city input box.
document.addEventListener('DOMContentLoaded', function () {
    const options = {
        data: {
            "Boston": null,
            "Seattle": null,
            "New York": null
        },
        limit: 5,
        minLength: 1
    }
    const cityInputEl = document.querySelectorAll('.autocomplete');
    M.Autocomplete.init(cityInputEl, options);
});

// Create and render the select options for state.
const handleStateOptions = function () {
    const stateSelectEl = document.querySelectorAll("select");

    const states = [
        "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ]

    for (let i = 0; i < stateSelectEl.length; i++) {
        const currentSelectEl = stateSelectEl[i];
        for (let j = 0; j < states.length; j++) {
            const currentState = states[j];
            const option = document.createElement("option");
            option.setAttribute("value", currentState);
            option.textContent = currentState;
            currentSelectEl.append(option);
        };
    }
    M.FormSelect.init(stateSelectEl);
};

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
        `
<p>Stop ${newStopNum}</p>
<div class="input-field col s4">
    <label class="active" for="city-${newStopNum}">
        City:
    </label>
    <input class="autocomplete" type="text" name="city-${newStopNum}" placeholder="Enter city">
</div>
<div class="input-field col s4">
    <label class="active" for="state-${newStopNum}">
        State:
    </label>
    <select>
        <option value="" disabled selected>Choose state</option>
    </select>
</div>
<div class="input-field col s4">
    <label class="active" for="state-${newStopNum}">
        Length of Stay (day):
    </label>
    <input type="number" min="0" name="days-${newStopNum}" placeholder="How many days">
</div>
`
    formEl.insertBefore(newInputRow, buttonContainer);
}

// The resetForm function resets the form to its default format.
const resetForm = function (event) {
    event.preventDefault();

    formEl.innerHTML = "";
    formEl.innerHTML =
        `
<div class="row" id="input-row">
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
        <input class="autocomplete" type="text" name="city-0" placeholder="Enter city">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-0">
            State:
        </label>
        <select>
            <option value="" disabled selected>Choose state</option>
        </select>
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
        <input class="autocomplete" type="text" name="city-1" placeholder="Enter city">
    </div>
    <div class="input-field col s4">
        <label class="active" for="state-1">
            State:
        </label>
        <select>
            <option value="" disabled selected>Choose state</option>
        </select>
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
};


// The insertInputRow function is called when the add stop button is clicked.
addStopBtn.addEventListener("click", function (event) {
    insertInputRow(event);
    handleStateOptions();
});
// The resetForm function is called when the reset form button is clicked.
resetBtn.addEventListener("click", function (event) {
    resetForm(event);
    handleStateOptions();
});

handleStateOptions();
// ----------------------------------------------------------------------------------------------------------------------------

var origins = '';
var lonCoord = 0;
var latCoord = 0;
var coordinate;
var date;
var departDate;
var split;


const handleSubmit = function (event) {
    event.preventDefault();

    //the following retrieves the user-selected date which is a STRING formatted as 2022-12-29
    var departDate = document.getElementById("departure-date").value;

    //this converts our date into an actual DATE formatted as Wed Dec 28 2022 16:00:00 GMT-0800 (Pacific Standard Time)
    var newDate = new Date(departDate);
    //this is necessary for when we wish to add a single day to our date variable

    //in this console.log we are then formatting our date to 2022-12-29T00:00:00.000Z which is more similar to the format required by our API
    // console.log(newDate.toISOString());

    //we will now split our closley formatted date by the . in order to retrieve the portion accepted by the API
    // var split = newDate.toISOString().split(".");

    //considering that when we split, our text is made into a type of array we can simply just pick the first item, which is anything in front of the period
    // console.log(split[0]);

    //this variable is grabbing each id named input-row
    const inputRowEl = document.querySelectorAll("#input-row");

    //for each row we need to grab the city, state, and lenght of stay(length of stay is meant for mapping) in order to obtain each cities coordinates in the coordinates api and for fetching the weather api response
    for (let i = 1; i < inputRowEl.length; i++) {
        const currentInputRow = inputRowEl[i];

        const city = currentInputRow.getElementsByTagName("input")[0].value;
        const state = currentInputRow.getElementsByTagName("input")[1].value;
        const day = currentInputRow.getElementsByTagName("input")[2].value;

        cityCoordinates(city, state);
        console.log(coordinate);

        //now that we have the necessary conversion of city name to coordinates then we can use that data to five us the weather api response
        // if our user plans to send several days in one location then we will need to fire off multiple weather api responses
        if (day > 0) {
            for (i = 0; i < day; i++) {


                // cityCoordinates(city, state);
                // console.log(coordinate);

                // add a day to our date variable
                newDate.setDate(newDate.getDate() + 1);

                //splitting our iso string formatted date by the . to retrieve everything before it (2022-12-29T00:00:00.000Z)
                split = newDate.toISOString().split(".");
                console.log(split[0]);
                // return split;

                cityWeather(coordinate, split[0]);

            }
        }
    };

}




saveBtn.addEventListener("click", handleSubmit);

function cityCoordinates(city, state) {
    var queryURLCoordinates = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',' + state + ',US&appid=4ef3772979be6dce53798914fca77969';

    fetch(queryURLCoordinates)
        .then(response => response.json())

        .then(data => {

            lonCoord = data[0].lon;
            latCoord = data[0].lat;
            coordinate = latCoord + ',' + lonCoord;
            // cityWeather(coordinate, split[0]);



            origins += coordinate + ";";
            console.log(origins);
            // cityRoadTrip(coordinate);
            return coordinate;



        })

        .catch(function (error) {
            console.error(error);
        });

}


//in this function we are going to fetch the api response that we will use to give a weather forecast for each city
function cityWeather(coordinate1, date) {

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

    fetch('https://dark-sky.p.rapidapi.com/' + coordinate1 + ',' + date + '?units=uk2', options)
        .then(response => response.json())
        .then(data => {
            tempMin = data.daily.data[0].temperatureMin;
            tempMax = data.daily.data[0].temperatureMax;
            humidity = data.daily.data[0].humidity;
            windSpeed = data.daily.data[0].windSpeed;

            console.log(tempMin, tempMax, humidity * 100 + '%', windSpeed + 'mph');

        })
        .catch(err => console.error(err));

}

function cityRoadTrip(coordinates) {
    var distance;
    var duration;


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '30f72d6795msh68cc89a67fcb9e7p1c5c49jsn45bfacd7bd58',
            'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
        }
    };

    fetch('https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=' + coordinates, options)
        .then(response => response.json())
        .then(data => {
            distance = data.distances[0];
            console.log(distance);
        })

        .catch(err => console.error(err));
}
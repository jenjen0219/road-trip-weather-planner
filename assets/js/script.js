

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


const handleSubmit = function (event) {
    event.preventDefault();

    //this variable is housing the input for the starting date entry
    // const departDate = document.getElementById("departure-date").value;
    // var date = departDate + 'T12:00:00';

    //the weather api used requires that we grab the date and also input a time
    // var date = departDate + 'T12:00:00';

    //this variable is grabbing each id named input-row
    const inputRowEl = document.querySelectorAll("#input-row");

    //for each row we need to grab the city, state, and lenght of stay(length of stay is meant for mapping) in order to obtain each cities coordinates in the coordinates api and for fetching the weather api response
    for (let i = 1; i < inputRowEl.length; i++) {
        const currentInputRow = inputRowEl[i];

        const city = currentInputRow.getElementsByTagName("input")[0].value;
        const state = currentInputRow.getElementsByTagName("input")[1].value;
        const day = currentInputRow.getElementsByTagName("input")[2].value;


        cityCoordinates(city, state);

        if (day > 0) {
            for (i = 0; i < day; i++) {
                date.setDate(date.getDate() + 1);
                console.log(date);
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
            cityWeather(coordinate);




            origins += coordinate + ";";
            console.log(origins);
            cityRoadTrip(coordinate);

        })

        .catch(function (error) {
            console.error(error);
        });

}


//in this function we are going to fetch the api response that we will use to give a weather forecast for each city
function cityWeather(coordinates, date) {

    const departDate = document.getElementById("departure-date").value;
    var date = departDate + 'T12:00:00';

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


    fetch('https://dark-sky.p.rapidapi.com/' + coordinates + ',' + date + '?units=uk2', options)
        .then(response => response.json())
        .then(data => {
            tempMin = data.daily.data[0].temperatureMin;
            tempMax = data.daily.data[0].temperatureMax;
            humidity = data.daily.data[0].humidity;
            windSpeed = data.daily.data[0].windSpeed;

            console.log(tempMin, tempMax, humidity * 100 + '%', windSpeed);

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
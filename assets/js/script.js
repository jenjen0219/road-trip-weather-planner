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

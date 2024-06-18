import { Ship } from "./classes.js";

export function startForm(isSecond) {
    const body = document.querySelector('body');

    const dialog = document.createElement("dialog");
    dialog.id = "start-dialog";

    const form = document.createElement("form");
    form.id = "start-form";

    const playerName = document.createElement("input");
    playerName.type = "text";
    playerName.id = "player-name-input";
    playerName.required = true;
    playerName.placeholder = "Name";
    form.appendChild(playerName);

    if (isSecond === true) {
        const typeInput = document.createElement("input");
        typeInput.type = "checkbox"
        typeInput.id = "player-type-input";
        form.appendChild(typeInput);
    }

    const submitButton = document.createElement("button");
    submitButton.id = 'submit-button';
    submitButton.type = "submit";
    submitButton.textContent = "submit";
    form.appendChild(submitButton);

    dialog.appendChild(form)
    body.appendChild(dialog)

    dialog.showModal();

    return dialog;
}

export function placeShips(playerContainer, player) {
    const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
    let shipSizesIndex = 0;

    function eventListeners(direction) {
        if (shipSizesIndex === shipSizes.length) {
            return;
        }

        const boardDiv = playerContainer.querySelector("#board-container");

        const directionButton = document.createElement("button")
        directionButton.id = direction;
        directionButton.textContent = "change direction";
        playerContainer.appendChild(directionButton)

        directionButton.addEventListener('click', function () {
            if (directionButton.id === 'vertical') {
                directionButton.id = 'horizontal';
                direction = 'horizontal'
            } else if (directionButton.id === 'horizontal') {
                directionButton.id = 'vertical';
                direction = 'vertical'
            }
        });

        const rowDivs = boardDiv.querySelectorAll(".row");

        rowDivs.forEach(rowDiv => {
            const cells = rowDiv.querySelectorAll("div");
            cells.forEach(cell => {
                cell.addEventListener('click', function () {
                    const newShip = new Ship(shipSizes[shipSizesIndex], JSON.parse(cell.id), directionButton.id)
                    console.log(newShip)

                    player.gameboard.coordinate(newShip)
                    console.log(player.gameboard)

                    shipSizesIndex++;
                    playerContainer.innerHTML = '';

                    playerContainer.appendChild(player.gameboard.render())
                    eventListeners(direction)
                });
            });
        });
    }
    eventListeners('vertical')
}
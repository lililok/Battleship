import { Ship } from "./classes.js";

export function startForm() {
    const body = document.querySelector('body');

    const dialog = document.createElement("dialog");
    dialog.id = "start-dialog";

    const form = document.createElement("form");
    form.id = "start-form";

    const welcomeText = document.createElement("div");
    welcomeText.textContent = "Welcome to Battleship!";
    welcomeText.id = "welcome-text";
    form.appendChild(welcomeText);

    const playerNameLabel = document.createElement("label");
    playerNameLabel.textContent = "Enter your name:";
    playerNameLabel.setAttribute('for', 'player-name-input');
    form.appendChild(playerNameLabel);
    const playerName = document.createElement("input");
    playerName.type = "text";
    playerName.id = "player-name-input";
    playerName.required = true;
    playerName.placeholder = "Name";
    form.appendChild(playerName);

    const submitButton = document.createElement("button");
    submitButton.id = 'submit-button';
    submitButton.type = "submit";
    submitButton.textContent = "New game";
    form.appendChild(submitButton);

    dialog.appendChild(form)
    body.appendChild(dialog)

    dialog.showModal();

    return dialog;
}

export function endForm(winner) {
    const body = document.querySelector('body');

    const dialog = document.createElement("dialog");
    dialog.id = "end-dialog";

    const form = document.createElement("form");
    form.id = "end-form";

    const results = document.createElement("div");
    results.textContent = `${winner} is the winner!!!`;
    form.appendChild(results);

    const resetButton = document.createElement("button");
    resetButton.id = 'reset-button';
    resetButton.type = "submit";
    resetButton.textContent = "Play again";
    form.appendChild(resetButton);

    dialog.appendChild(form)
    body.appendChild(dialog)

    dialog.showModal();

    return dialog;
}

export function placeShips(player, container) {
    let shipSizesIndex = 0;

    function eventListeners(direction) {
        if (shipSizesIndex === player.gameboard.shipSizes.length) {
            return;
        }

        const boardDiv = container.querySelector("#board-container");

        const directionButton = document.createElement("button")
        directionButton.id = direction;
        directionButton.textContent = "change direction";
        container.appendChild(directionButton)

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
                    const newShip = new Ship(player.gameboard.shipSizes[shipSizesIndex], JSON.parse(cell.id), directionButton.id)
                    player.gameboard.coordinate(newShip)
                    shipSizesIndex++;
                    container.innerHTML = '';
                    container.appendChild(player.gameboard.render())
                    eventListeners(direction)
                });
            });
        });
    }
    eventListeners('vertical')
}

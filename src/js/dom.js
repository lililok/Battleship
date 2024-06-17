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

export function placeShips(playerContainer, playerBoard) {
    const boardDiv = playerContainer.querySelector("#board-container");
    const rowDivs = boardDiv.querySelectorAll(".row");

    rowDivs.forEach(rowDiv => {
        const cells = rowDiv.querySelectorAll("div");
        cells.forEach(cell => {
            cell.addEventListener('click', function () {
                playerBoard.coordinate(cell.id)
                playerBoard.render()
            });
        });
    });
}
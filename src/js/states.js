import { startForm, placeShips } from "./dom.js";
import { Ship, Gameboard, Player } from "./classes.js";

export function gameStart() {
    const firstForm = startForm(false)

    firstForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const playerOneName = document.getElementById("player-name-input").value;

        firstForm.close();
        firstForm.remove();

        const secondForm = startForm(true)

        secondForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const playerTwoName = document.getElementById("player-name-input").value;
            const playerTwoTypeInput = document.getElementById("player-type-input").checked;
            const playerTwoType = playerTwoTypeInput ? "computer" : "human";

            secondForm.close();
            secondForm.remove();

            const playerOneGameBoard = new Gameboard()
            const playerTwoGameBoard = new Gameboard()

            const playerOne = new Player(playerOneName, 'human', playerOneGameBoard)
            const playerTwo = new Player(playerTwoName, playerTwoType, playerTwoGameBoard)

            gameCurrent(playerOne, playerTwo)
        });
    });

    //display forms.. twice
    //input players
    //call gamecurrent
}

export function gameCurrent(playerOne, playerTwo) {
    const playerOneContainer = document.querySelector('.player-1');
    playerOneContainer.appendChild(playerOne.gameboard.render())
    placeShips(playerOneContainer, playerOne)

    passTurns();

    const playerTwoContainer = document.querySelector('.player-2');
    playerTwoContainer.appendChild(playerTwo.gameboard.render())
    placeShips(playerTwoContainer, playerTwo)
    //render boards
    //listens to clicks and places ships
    //randomizes ships if pc
    //pass turns (as another state) if not pc
    //check values
    //if values == gameovervalues call gameover
}

export function gameOver() {
    //print results
    //display reset button
    //clear
}

export function passTurns() {
    
}
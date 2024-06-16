import { startForm } from "./dom.js";
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
            const playerTwoType = document.getElementById("player-type-input").value;

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
    console.log(playerOne, playerTwo)
    //render boards
    //listens to clicks and places ships
    //randomizes ships if pc
    //pass turns
    //check values
    //if values == gameovervalues call gameover
}

export function gameOver() {
    //print results
    //display reset button
    //clear
}
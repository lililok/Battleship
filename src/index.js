import { gameStartShips, gameStartForm } from "./js/states.js";
import { Ship, Gameboard, Player } from "./js/classes.js";
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const playerOneGameBoard = new Gameboard()
    const playerTwoGameBoard = new Gameboard()

    const playerOne = new Player('Ajax', 'human', playerOneGameBoard)
    const playerTwo = new Player('Bot', 'computer', playerTwoGameBoard)

    gameStartShips(playerOne, playerTwo)
});
import { gameStartShips, gameCurrent } from "./js/states.js";
import { Ship, Gameboard, Player } from "./js/classes.js";
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const playerOneGameBoard = new Gameboard()
    const playerTwoGameBoard = new Gameboard()

    const playerOne = new Player('A', 'human', playerOneGameBoard)
    const playerTwo = new Player('B', 'human', playerTwoGameBoard)

    gameStartShips(playerOne, playerTwo)
});
import { startForm, placeShips } from "./dom.js";
import { Ship, Gameboard, Player } from "./classes.js";

export function gameStartForm() {
    const form = startForm()

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const playerOneName = document.getElementById("player-name-input").value;

        form.close();
        form.remove();

        const playerOneGameBoard = new Gameboard()
        const playerTwoGameBoard = new Gameboard()

        const playerOne = new Player(playerOneName, 'human', playerOneGameBoard)
        const playerTwo = new Player('Bot', 'computer', playerTwoGameBoard)

        gameStartShips(playerOne, playerTwo)
    });
}

export function gameStartShips(player, bot) {
    //const playerContainer = document.querySelector('.player-1');
    //playerContainer.appendChild(player.gameboard.render())
    //placeShips(player, playerContainer)

    player.gameboard.randomize()
    const playerContainer = document.querySelector('.player-1');
    playerContainer.appendChild(player.gameboard.render())
    bot.gameboard.randomize()
    const botContainer = document.querySelector('.player-2');
    botContainer.appendChild(bot.gameboard.render())
    
    gameCurrent(player, bot)
}

export function gameCurrent(player, bot) {
    const botBoardDiv = document.querySelector(".player-2 #board-container");

    const rowDivs = botBoardDiv.querySelectorAll(".row");

    rowDivs.forEach(rowDiv => {
        const cells = rowDiv.querySelectorAll("div");
        cells.forEach(cell => {
            cell.addEventListener('click', function () {
                const positionHit = JSON.parse(cell.id)
                bot.gameboard.receiveAttack(positionHit)
                bot.gameboard.render()
                console.log(JSON.parse(cell.id))
                console.log(bot.gameboard)
            });
        });
    });
        /*gameStart(currplayer);
        eventListener(player)
        if gameboard_curr == endgame:
            gameOver()
        else:
            attack*/
}

export function gameOver() {
    //print results
    //display reset button
    //clear
}


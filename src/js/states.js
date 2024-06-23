import { startForm, endForm, placeShips } from "./dom.js";
import { Ship, Gameboard, Player } from "./classes.js";
import userIcon from '../assets/userIcon.png';

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
    const playerContainer = document.querySelector('.player-1');
    const userIconImg = document.createElement("img");
    userIconImg.className = 'user-icon';
    userIconImg.src = userIcon;
    playerContainer.appendChild(userIconImg)
    playerContainer.appendChild(player.gameboard.render())

    placeShips(player, playerContainer, bot)
}

export function gameCurrent(player, bot, shuffled) {
    const botBoardDiv = document.querySelector(".player-2 #board-container");
    const playerBoardDiv = document.querySelector(".player-1 #board-container");
    const playerContainer = document.querySelector('.player-1');
    const botContainer = document.querySelector('.player-2');

    const rowDivs = botBoardDiv.querySelectorAll(".row");

    rowDivs.forEach(rowDiv => {
        const cells = rowDiv.querySelectorAll("div");
        cells.forEach(cell => {
            if (cell.className !== 'visited' && cell.className !== 'visited ship') {
                cell.addEventListener('click', function () {
                    const positionHit = JSON.parse(cell.id);
                    bot.gameboard.receiveAttack(positionHit);
                    botContainer.replaceChild(bot.gameboard.render(true), botBoardDiv);
    
                    const randomPosition = shuffled.pop();
                    player.gameboard.receiveAttack(randomPosition);
                    playerContainer.replaceChild(player.gameboard.render(), playerBoardDiv);

                    console.log(player.gameboard)
                    console.log(bot.gameboard)
                    
    
                    if (player.gameboard.isEndGame() || bot.gameboard.isEndGame()) {
                        gameOver(player, bot);
                    } else {
                        gameCurrent(player, bot, shuffled);
                    }
                });
            }
        });
    });
}

export function gameOver(player, bot) {
    const form = endForm(bot.gameboard.isEndGame() ? player.name : bot.name)

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        form.close();
        form.remove();

        const botContainer = document.querySelector('.player-2');
        const playerContainer = document.querySelector('.player-1');

        botContainer.innerHTML = '';
        playerContainer.innerHTML = '';

        const playerOneGameBoard = new Gameboard()
        const playerTwoGameBoard = new Gameboard()

        const playerOne = new Player(player.name, 'human', playerOneGameBoard)
        const playerTwo = new Player('Bot', 'computer', playerTwoGameBoard)

        gameStartShips(playerOne, playerTwo)
    });
}



export class Ship {
    constructor(shipLength, position=[], direction='vertical') {
        this.shipLength = shipLength
        this.hits = 0
        this.sunk = false
        this.position = position
        this.direction = direction
    }

    hit() {
        this.hits++;
        return this.hits;
    }

    isSunk() {
        if (this.hits === this.shipLength) {
            this.sunk = true;
        }
        return this.sunk;
    }
}

export class Gameboard {
    constructor() {
        this.current = Array.from({ length: 10 }, () => Array(10).fill(0));
        this.ships = []
        this.shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        this.visited = 0
        this.hits = 0
    }

    coordinate(ship) {
        if (!this.validation(ship)) {
            throw new Error("you almost broke the game -_- try again!!!");
        }

        if (ship.direction === 'horizontal') {
            for (let i = 0; i < ship.shipLength; i++) {
                this.current[ship.position[0]][ship.position[1]+i] = 1;
                ship.position.push([ship.position[0], ship.position[1] + i]);
            }
        } else {
            for (let i = 0; i < ship.shipLength; i++) {
                this.current[ship.position[0]+i][ship.position[1]] = 1;
                ship.position.push([ship.position[0] + i, ship.position[1]]);
            }
        }

        ship.position.splice(0,2)
        this.ships.push(ship)
    }
    
    receiveAttack(positionHit) {
        let found = false

        this.ships.forEach(ship => {
            ship.position.forEach(pos => {
                if (!found && pos[0] === positionHit[0] && pos[1] === positionHit[1]) {
                    ship.hit();
                    this.hits++;
                    this.visited++;
                    this.current[positionHit[0]][positionHit[1]] = 3;
                    found = true;
                }
            });
        });
        
        if (!found) {
            this.current[positionHit[0]][positionHit[1]] = 2;
            this.visited++;
        }
    }

    isEndGame() {
        if (this.visited === 100) {
            console.log('No more place!!! 0_0')
            return true;
        }
        if (this.hits === 20) {
            console.log('You lost!!! >:]')
            return true;
        }
        return false;
    }

    render() {
        const boardDiv = document.createElement("div");
        boardDiv.id = "board-container"

        this.current.forEach((row, indexRow) => {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row";
    
            row.forEach((cell, indexCol) => {
                const boardCell = document.createElement("div");
                boardCell.id = `[${indexRow}, ${indexCol}]`;
    
                if (cell === 0) {
                    boardCell.className = "unvisited";
                } else if (cell === 1) {
                    boardCell.className = "unvisited ship";
                } else if (cell === 2) {
                    boardCell.className = "visited";
                } else {
                    boardCell.className = "visited ship";
                }
    
                rowDiv.appendChild(boardCell);
            });
    
            boardDiv.appendChild(rowDiv);
        });
    
        return boardDiv;
    }

    validation(ship) {
        const [row, col] = ship.position;
        const shipLength = ship.shipLength;
        const direction = ship.direction;

        const bounds = () => {
            if (direction === 'horizontal') {
                return col + shipLength > 10;
            } else {
                return row + shipLength > 10;
            }
        };

        const collision = () => {
            const deltas = [-1, 0, 1];

            for (let i = 0; i < shipLength; i++) {
                const currentRow = direction === 'horizontal' ? row : row+i;
                const currentCol = direction === 'horizontal' ? col+i : col;

                for (let dRow of deltas) {
                    for (let dCol of deltas) {
                        const newRow = currentRow + dRow;
                        const newCol = currentCol + dCol;
                        if (
                            newRow >= 0 && newRow < 10 &&
                            newCol >= 0 && newCol < 10 &&
                            this.current[newRow][newCol] === 1
                        ) {
                            return true;
                        }
                    }
                }
            }

            return false;
        }

        if (bounds() || collision()) {
            return false;
        }

        return true;
    }

    randomize() {
        this.shipSizes.forEach(size => {
            let placed = false;

            while (!placed) {
                const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
                const row = Math.floor(Math.random() * 10);
                const col = Math.floor(Math.random() * 10);

                const newShip = new Ship(size, [row, col], direction);

                if (this.validation(newShip)) {
                    this.coordinate(newShip);
                    placed = true;
                }
            }
        });
    }
}

export class Player {
    constructor(name, type='human', gameboard) {
        this.name = name
        this.type = type
        this.gameboard = gameboard
    }
}
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
        this.current = Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => 0));
        this.ships = []
        this.visited = 0
        this.hits = 0
    }

    coordinate(ship) {
        this.ships.push(ship)

        if (ship.direction=='vertical') {
            for (let i = 0; i < ship.shipLength; i++) {
                this.current[ship.position[0]][ship.position[1]+i] = 1;
                ship.position.push([ship.position[0], ship.position[1]+i])
            }
        } else {
            for (let i = 0; i < ship.shipLength; i++) {
                this.current[ship.position[0]+i][ship.position[1]] = 1;
                ship.position.push([ship.position[0], ship.position[1]+i])
            }
        }
        ship.position.splice(0, 2);
    }

    receiveAttack(positionHit) {
        this.ships.forEach(ship => {
            ship.position.forEach(pos => {
                if (pos[0] === positionHit[0] && pos[1] === positionHit[1]) {
                    ship.hit();
                    this.hits++;
                }
            });
        });
        this.current[positionHit[0]][positionHit[1]] = 2;
        this.visited++;
    }

    isEndGame() {
        if (this.visited === 100) {
            console.log('No more place!!! 0_0')
        }
        if (this.hits === 30) {
            console.log('You lost!!! >:]')
        }
    }
}

export class Player {
    constructor(gameboard, type='human') {
        this.gameboard = gameboard
        this.type = type
    }
}
export class Ship {
    constructor(shipLength, position, direction='vertical') {
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
    }

    coordinate(ship) {
        if (ship.direction=='vertical') {
            for (let i = 0; i < ship.shipLength; i++) {
                this.current[ship.position[0]][ship.position[1]+i] = 1;
                this.ships.push([ship.position[0], ship.position[1]+i])
            }
        } else {
            for (let i = 0; i < ship.shipLength; i++) {
                this.current[ship.position[0]+i][ship.position[1]] = 1;
                this.ships.push([ship.position[0]+i, ship.position[1]])
            }
        }
    }

    receiveAttack(positionHit) {
        if (positionHit == [position[0], position[1]]) {
            
        }
    }
}

export class Player {
    
}
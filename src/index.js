import { Ship, Gameboard } from "./js/classes.js";

const testShipOne = new Ship(4, [2,3], 'horizontal')
const testShipTwo = new Ship(3, [6, 5])
const testBoard = new Gameboard()

console.log(testShipOne)
console.log(testShipTwo)

testBoard.coordinate(testShipOne)
testBoard.coordinate(testShipTwo)
console.log(testBoard)

testBoard.receiveAttack([2,3])
testBoard.receiveAttack([4,2])
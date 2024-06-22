import { Ship, Gameboard } from "./js/classes.js";

test('pass validation, placed on board', () => {
    let testBoard = new Gameboard();
    let testShip = new Ship(1, [1, 1], 'vertical');

    testBoard.coordinate(testShip);

    expect(testBoard.current).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);
});

test('tried to coordinate, not passed validation', () => {
    let testBoard = new Gameboard();
    let invalidShip = new Ship(1, [10, 10], 'vertical');

    expect(() => {
        testBoard.coordinate(invalidShip);
    }).toThrow("you almost broke the game -_- try again!!!");
});

test('not passed validation on collision', () => {
    let testBoard = new Gameboard();
    let testShipOne = new Ship(3, [1, 1], 'vertical');
    let testShipTwo = new Ship(3, [2, 1], 'horizontal');

    testBoard.coordinate(testShipOne);

    expect(() => {
        testBoard.validation(testShipTwo);
    }).toBe(false);
});

test('not passed validation on bounds', () => {
    let testBoard = new Gameboard();
    let invalidShip = new Ship(1, [10, 10], 'vertical');

    expect(() => {
        testBoard.validation(invalidShip);
    }).toBe(false);
});


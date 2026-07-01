const rps = require ('./rockPaperScissors.js');

test("Checking to see which player won ", () => {
    expect(rps("rock", "scissors")).toBe(1);
});

test("Checking to see which player won ", () => {
    expect(rps("paper", "scissors")).toBe(2);
});

test("Checking to see which player won ", () => {
    expect(rps("rock", "paper")).toBe(2);
});

test("Checking to see which player won ", () => {
    expect(rps("scissors", "paper")).toBe(1);
});

test("Checking to see if there was a draw ", () => {
    expect(rps("scissors", "scissors")).toBe(3);
});

test("Checking to see if there was a draw ", () => {
    expect(rps("paper", "paper")).toBe(3);
});

test("Checking to see if there was a draw ", () => {
    expect(rps("rock", "rock")).toBe(3);
});
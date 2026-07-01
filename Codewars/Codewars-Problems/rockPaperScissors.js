/* THE PROBLEM
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
rockpaperscissors
*/

/* THE STEPS
*/

const rps = (p1, p2) => {

    // let playerWon = "Player 1 won!";

    if(p1 == p2){
        return 3;
    } else {
        if(p1 == "scissors" && p2 != "rock"){
        return 1;
        }
        else if(p1 == "paper" && p2 != "scissors"){
        return 1;
        } 
        else if(p1 == "rock" && p2 != "paper"){
        return 1;
        }
        else {
            return 2; 
        } 
    }   
}

module.exports = rps;
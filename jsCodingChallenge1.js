/*
CHALLENGE

Create a game where a score is computed by a players height being added by 5 * the players age. The winner will have the hieghest score.

1. Create variables for the hight and age of the players
2. Calculate the scores
3. Determine the winner
*/

var player1Age, player1Height, player1Score;
var player2Age, player2Height, player2Score;
var player3Age, player3Height, player3Score;

player1Age = 22;
player2Age = 21;
player3Age = 24;
player1Height = 183;
player2Height = 154;
player3Height = 183;

player1Score = player1Hieght + (5 * player1Age);
player2Score = player2Hieght + (5 * player2Age);
player3Score = player3Hieght + (5 * player3Age);

if (player1Score > player2Score && player1Score > player3Score)
    {
        console.log('Player 1 wins with a score of' + player1Score + 'points!');
    }
else if (player2Score > player1Score && player2Score > player3Score)
    {
        console.log('Player 2 wins with a score of' + player2Score + 'points!');
    }
else if (player3Score > player1Score && player3Score > player3Score)
    {
        console.log('Player 3 wins with a score of' + player3Score + 'points!');
    }
else if (player1Score === player2Score && player1Score > player3Score)
    {
        console.log('Player 1 and 2 win with a score of' + player1Score + 'points!');
    }
else if (player1Score === player3Score && player1Score > player2Score)
    {
        console.log('Player 1 and 3 win with a score of' + player1Score + 'points!');
    }
else if (player2Score === player3Score && player2Score > player1Score)
    {
        console.log('Player 2 and 3 win with a score of' + player2Score + 'points!');
    }
else
    {
        console.log('Player 1, 2, and 3 tie with a score of' + player1Score + 'points!');
    }

/* Fun quiz game in the console!

1. Use a function constructor to describe a question with
a) the question itself
b) the answers the player can choose
c) correct answer

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers.

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print on the console whether the answer is correct or not.

7. Make code provate and make sure it doesnt interfere with other programmers code.

8. After displaying the result, display the next random question so that the game continues.

9. Include a quit option

10. Track the users score. 1 correct answer = 1 point

11. Display the score in the console
*/

(function()
{
    function Question(question, answers, correct)
    {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // Display the Questions and Answers
    Question.prototype.displayQuestion = function()
    {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++)
            {
                console.log(i + ': ' + this.answers[i]);
            }
    }

    Question.prototype.checkAnswer = function(ans, callback)
    {
        var sc;
        if (ans === this.correct)
            {
                console.log('Correct Answer!');
                sc = callback(true);
            }
        else
            {
                console.log('Incorrect Answer');
                sc = callback(false);
            }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(sc)
    {
        console.log('Your current score is ' + sc);
        console.log('---------------');
    }

    // Questions
    var q1 = new Question('Is JavaScript the coolest programming language in the world', ['Yes', 'No'], 0);

    var q2 = new Question('What is the name of this course?', ['Java', 'JavaScript', 'Python'], 1);

    var q3 = new Question('What describes coding the best?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

    var questions = [q1, q2, q3];

    function score()
    {
        var sc = 0;
        return function(correct)
        {
            if (correct)
                {
                    sc++;
                }
            return sc;
        }
    }

    var keepScore = score();
    
    function nextQuestion()
    {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit')
            {
                questions[n].checkAnswer(parseInt(answer), keepScore);
                nextQuestion();        
            }

    }

})();
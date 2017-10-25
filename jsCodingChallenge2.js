/*
CHALLENGE

1. Create an array of years people were born
2. Create and empty array
3. Use a loop to fill the array with the ages of the people whos birth years were entered in the first array.
4. Use another loop to log into the console whether each person is at least 18 years old.
5. Create a function which receieves the vector of years as an argument, executes the steps 2, 3, and 4, and returns a vector of true if the person is at least 18, and false if the person is less than 18 years old.
6. Call the funciton with two differenct vectors and store the results into variables.
*/

var birthYears = [1990, 1992, 1995, 2000, 2006];
var age = [];

for (var i = 0; i < birthYears.length; i++)
    {
        age[i] = 2017 - birthYears[i];
    }

for (var j = 0; j < age.length; j++)
    {
        if (age[j] >= 18)
            {
                console.log("Person" + (j + 1) + "is at least 18.");
            }
        else
            {
                console.log("Person" + (j + 1) + "is not at least 18.");
            }
    }

function printFullAge (birthYears)
{
    var age = [];
    var adults = [];

    for (var i = 0; i < birthYears.length; i++)
        {
            age = 2017 - birthYears[i];
        }

    for (var j = 0; j < age.length; j++)
        {
            if (age <= 18)
                {
                    console.log("Person" + (j + 1) + "is at least 18.");
                    adults.push(true);
                }
            else
                {
                   console.log("Person" + (j + 1) + "is not at least 18.");
                    adults.push(false)
                }
        }
    return adults;
}

var birthYears1 = new Array(1990, 1992, 1995, 2000, 2006);
var birthYears2 = new Array(1992, 1993, 1994, 2005, 2006);

var full_1 = printFullAge(birthYears1);
var full_2 = printFullAge(birthYears2);
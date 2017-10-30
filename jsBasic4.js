//Lecture: Hoisting

// FUNCTIONS
// calculateAge is stored in the Variable Object
// before the code is executed, making it available before it is 
// declared
calculateAge(1965); //SECOND ATTEMPT

function calculateAge(year)
{
    console.log(2016 - year);
}

calculateAge(1990); //FIRST ATTEMPT

retirement(1965); // SECOND ATTEMPT, will not work for function 
                  // expression. 

var retirement = function(year)
{
    console.log(65 - (2016 - year));
}

retirement(1960) // FIRST ATTEMPT

// VARIABLES
console.log(age); // UNDEFINED: Variables without a type is                       //"undefined"
var age = 23; 
console.log(age); // 23: STORED IN GLOBAL EXCECUTION CONTEXT

// Has its own execution context
// Can have the same name as global object but will only remain
// in the function.
funciton foo() 
{
    console.log(age); // UNDEFINED
    var age = 65;
    console.log(age); // 65
}
foo();
console.log(age); // 23


// Lecture: Scoping

// First scoping example

var a = 'Hello!';
first();
function first()
{
    var b = 'Hi!';
    second()
    
    function second()
    {
        var c = 'Hey!';
        console.log(a + b + c)
    }
}

// Second scoping example
// Difference between execution stack and scope chain

// C is undefined
var a = 'Hello!';
first();
function first()
{
    var b = 'Hi!';
    second()
    
    // Has the ability to call the third() function because of 
    // the scope chain.
    // Can access variable c
    function second()
    {
        var c = 'Hey!';
        third();
    }
}

// Cannot access variable c
// Can access Global variables
function third()
{
    var d = 'Johm';
    console.log(c); // Will have an error because it's                           //unaccessab le
    console.log (a + b);
}
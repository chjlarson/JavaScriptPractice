/*
//Lecture: Functions

function calculateAge(birthYear)
{
    var age = 2017 - birthYear;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMia = calculateAge(1992);
var ageAnna = calculateAge(1993);
console.log(ageJohn + ageAnna + ageMia);

function untilRetirement(name, year)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0)
        {
            console.log(name + ' retires in ' + retirement + ' years.');
        }
    else
    {
        console.log(name + ' is already retired.');    
    }
}
untilRetirement('John', 1990);
untilRetirement('Mia', 1992);
untilRetirement('Chris', 1995);
untilRetirement('Elli', 1993);


//Lecture: Statements and expressions

//Statement
function someFun(par)
{
    //code performing an action
}

//Expression
var someFun = function(par)
{
    //code producing an outcome
}

//statement
if (x === 5)
    {
        //do something
    }
    

//Lecture: Arrays

var names = ['John','Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[2]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1)
    {
        console.log('John is Not a teacher.');
    }
    

//Lecture: Objects

var john = 
    {
        name: 'John',
        lastName: 'Smith',
        birthYear: 1990,
        job: 'teacher',
        isMarried:false
    };
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.lastName = 'Smith';
jane['job'] = 'retired';



//Lecture: Object Methods

//v.1.0
var john = 
    {
        name: 'John',
        lastName: 'Smith',
        birthYear:1990,
        job: 'teacher',
        isMarried: false,
        family: ['Jane','Mark','Bob'],
        calculateAge: function()
        {
            return 2017 - this.birthYear;
    
        }
    };
console.log(john.family[2]);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

//v2.0
var john = 
    {
        name: 'John',
        lastName: 'Smith',
        birthYear:1990,
        job: 'teacher',
        isMarried: false,
        family: ['Jane','Mark','Bob'],
        calculateAge: function()
        {
            //return 2017 - this.birthYear;
            this.age = 2017 - this.birthYear;
        }
    };

john.calculateAge();
console.log(john);

var mike= 
    {
        birthYear:1950,
        calculateAge: function()
        {
            return 2017 - this.birthYear;
    
        }
    };

mike.calculateAge();
console.log(mike);


//Lecture: Loops

for (var i = 0; i < 10; i++)
     {
        console.log(i);
     }

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//for loops
for (var i = 0; i < names.length; i++)
    {
        console.log(names[i]);
    }

for (var i = names.length - 1; i >= 0; i--)
    {
        console.log(names[i]);
    }


//while loops

var i = 0;
while(i < names.length)
    {
        console.log(names[i]);
        i++;
    }

for (var i = 1; i <= 5; i++)
    {
        console.log(i);
        
        if (i === 3)
            {
                break;
            }
    }

for (var i = 1; i <= 5; i++)
    {
        console.log(i);
        
        if (i === 3)
            {
                continue;
            }
        console.log(i);
    }
*/
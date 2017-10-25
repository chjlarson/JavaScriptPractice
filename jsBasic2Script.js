/* 
This code is from the JavaScript Variable Lectures

// ****Lecture: Variables 1 ****
console.log('Hello World!');

var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullage = true;
console.log(fullage);


// ****Lecture: Variables 2 ****
var name = "John";
var age = 26; 

//console.log(name + age);
//console.log(age+age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried =false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he Married? ' + isMarried);

// Lecture: Operators

var currentYear = 2016;
var birthYear = currentYear - 26;
birthyear = currentYear - 26 * 2;
//2017 - 52 = 1964
console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3+5)*4-6;

ageJohn++;
ageJohn = ageJohn + 1;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);

// Lecture: if/else statements

var name= 'John';
var age = 26;
var isMarried = 'no';

if (isMarried === 'yes')
    {
        console.log(name + ' is married!');
    }
else
    {
        console.log(name + ' will hopefully marry soon:) ');
    }

isMarried = false;

if (isMarried)
    {
        console.log('YES!');
    }
else
    {
        console.log('No!');
    }


// Lecture: Boolean Logic and Switch

var age = 26;

if (age <= 19)
    {
        console.log('John is a teenager');
    }
else if (age >= 20) && (age < 30)
    {
        console.log('John is a young man.');
    }
else
    {
        console.log('John is a man.');
    }

var job = 'teacher';

job = prompt('What does John do?');

switch (job)
    {
        case 'teacher':
            console.log('John teaches kids.');
            break;
        case 'driver':
            console.log('John drives a cab.');
            break;
        case 'cop':
            console.log('John helps fight crime.');
            break;
        default:
            console.log('John does something else.');
    }
*/
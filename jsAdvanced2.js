/*

// Lecture: let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
// const is like var but cannot be changed
// let is like var
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var birthYear = 1990;
    }
        console.log(firstName + 'born in ' + birthYear + ', is now officially allowed to drive a car.');
}

// ES6
fuction driversLicence6(passedTest) {
   let FirstName;
   const birthYear = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
        console.log(firstName + 'born in ' + birthYear + ', is now officially allowed to drive a car.');
}

driversLicense6(true);

// These are separate variables 'i'
let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Lecture: Blocks and IIFEs

// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// ES5
(function() {
    var c = 3;
})();

console.log(i);

// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const bithYear = 1990;

function calcAge(year) {
    return 2017 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + birthYear + '. Todat he is ' calcAge(birthYear) + 'years old.');

//ES6
console.log('This is ${firstName} ${lastName}. He was born in ${birthYear}. Today, he is ${calcAge(birthyear)} year old.');

const n = '${firstName} ${lastName}';
console.log(n.startsWith('j'));
console.log(n.endsWith('j'));
console.log(n.includes('oh')};
conslole/log('${firstName}'.repeat(5))

// Lecture: Arrow Functions

const years = [1990, 1992, 19965, 1982];

//ES5
var ages5 = years.map(function(el) {
    return 2017 - el;
});
console.log(ages5);

let ages6 = years.map(el => 2017 - el);
console.log(ages6)

ages6 = years.map((el,index) => 'Age element ${index + 1}: ${2017 - el}.');
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return 'Age element ${index + 1}: ${2016 - el}.'
});
console.log(age6);

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
box5.clickMe();

// ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

var box62 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box62.clickMe();

function Person(name){
    this.name = name;
}

// ES5 
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
        // This points to the global object
        return this.name + ' is friends with ' + el;
    }.bind(this));
}

var friends = ['bob', 'jane', 'mark'];
Person('john').myFriends5(friends);

// ES6
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(el => '${this.name} is friends with ${el}');
    
    conslole.log(arr);
}
Person('mike').myFriends6(friends);

// Lecture: Destructuring

// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John'
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new
    Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});


// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.stlye.backgroundColor = 'dodgerblue');

// ES5

for(var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textcontext = 'I changed to blue';
}


// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContext = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 13, 18, 21];

var full = ages.map(funciton(cur) {
                    return cur >= 18;
                    });
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >=18));
console.log(ages.find(cur => cur >= 18));

// Lecture: Spread operator

function addFourAges (a, b, c, d) {
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5
var ages = [10, 30, 12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familysmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob'];

const bigFam = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('hi');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');


// Rest Parameters
// Opposite of Spread


// ES5
function isFullAge5() {
    console.log(arguents);
    
    Array.prototype.slice.call(arguments);
    
    ageArr.forEach(function(cur) {
        console.log((2017 - cur) >= 18);
    })
}
//isFullAge5(1990, 1999, 2965);
//isFullAge5(1999, 1996, 1999, 2016, 1987);

// ES6
function isFullAge6(...years) {
    console.log(years)
    
    years.forEach(cur => console.log((2017 - cur) >= 18));
}
isFullAge6(1999, 1996, 1999, 2016, 1987);


// ES5
function isFullAge5(limit) {
    console.log(arguents);
    
   var argsArr =  Array.prototype.slice.call(arguments, 1);
    
    ageArr.forEach(function(cur) {
        console.log((2017 - cur) >= limit);
    })
}
isFullAge5(21, 1990, 1999, 2965);
//isFullAge5(1999, 1996, 1999, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
    console.log(years)
    
    years.forEach(cur => console.log((2017 - cur) >= limit));
}
isFullAge6(16, 1999, 1996, 1999, 2016, 1987);

// Lecture: Defualt parameters


// ES5
function SmithPerson(firstName, birthYear, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith': lastName = lastName;
    nationality === undefined ? nationality = 'American': nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = bithYear;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var mary = new SmithPerson('Emily', 1993, 'Diaz', 'Spanish');


// ES6
function SmithPerson(firstName, birthYear, lastName = 'Smith', nationality = 'American') {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = bithYear;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var mary = new SmithPerson('Emily', 1993, 'Diaz', 'Spanish');

//Lecture: Maps

const question = new Map();
question.set('question', 'What is the offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    //question.delete(4);
    console.log('answer 4 is here');
}
//question.clear();

//question.forEach((value, key) => console.log("This is ${key}, and it's set to ${value}"));

for (let [key, value] pf question.entries*()) {
    if (typeof(key) === 'number') {
        console.log('Answer ${key}: ${value}');
    }
}

const and = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));


//Lecture: Classes

// ES5
var Person5 = function(name, birthYear, job) {
    this.name = name;
    this.birthYear= birthYear;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.birthYear;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
     constructor (name, birthYear, job) {
         this.name = name;
         this.birthYear = birthYear;
         this.job = job;
     }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
     
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();



// Lecture: Classes and subclasses

// ES5
var Person5 = function(name, birthYear, job) {
    this.name = name;
    this.birthYear= birthYear;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.birthYear;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

var Athlete5 = function(name, birthYear, job, games, medals) {
    Person5.call(this, name, birthYear, job);
    this.games = games;
    this.medals = medals;
}

Athlete5.prototype.Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medal++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();

// ES6
var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6 {
     constructor (name, birthYear, job) {
         this.name = name;
         this.birthYear = birthYear;
         this.job = job;
     }
    
    calculateAge() {
        var age = new Date().getFullYear() - this.birthYear;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, birthYear, job, games, medals) {
        super(name, birthYear, job);
        this.games = games;
        this.medals = medals;
    }
    
    wonMedals {
        this.medal++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedals();
johnAthlete6.calculateAge();

*/
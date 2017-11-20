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
*/

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.stlye.backgroundColor = 'dodgerblue');

// ES5
/*
for(var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textcontext = 'I changed to blue';
}
*/

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
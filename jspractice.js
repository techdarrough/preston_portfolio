// comment 

/*

mutliline comment

*/

// VAR are just containers for values 
// var let conts 

var x = 5

// declares x as var 

// not using var let or const will cuase bugs in your code

// us typeof to identify the primitive value


//els use strict === in JavaScript for comparisions to avoid  bugs 

/*

if ( boolean expression) {
    code to run if expression is true
}
/*

/* 
if ( false) {
    this wont run
} else if (true) {
    this will run
}
example 1
*/

if (userAge > 21){
    console.log("user is an adult");
} else if (userAge > 10) {
    console.log("user is a teenager");
} else {
    console.log("User is a child")
}

/*
example 2 


switch (currentpage){
    case value1;
    code to run if true
}
break;

*/

let time = 12
switch (time){
    case 8 :
    console.log("eat breakfast");
    break;
}



/*
let myHand = [
    'Ace of Spades',
    '2 of diamonds',
    '3 of Spades',
    '4 of hearts'
]

array is defined using the [] accessing items in the array are 
by index starting at 0

myHand[0]

myHand[1]

let myHand = [
    'Ace of Spades',
    '2 of diamonds',
    '3 of Spades',
    '4 of hearts'
]
let selectedCard = 2

console.log(myHand[selectedCard])

myHand.push( '5 of clubs' )
adds 5 of clubs to array myHand

console.log(myhand.lenght)
function will return lenght of array

arrays can contain number strings and even another array

let matrix [
    0,
    1,
    0
]

can update wiht the following 

matrix[0] = 1

will update first item in array matrix

let matrix = [
    [1,0,1]
    [0,1,0]
    [1,0,1]
]

/*
This file will be split into chapters.
Chapters are loosly defined.
Some chaters might be linked to each other or they might be not.
Enjoy as I learn ts :>

Update: this is basically 90% like java lol.
*/

  /////////////////
 /// CHAPTER 1 ///
/////////////////

// vars are scoped to the nearest method.
// lets are not and are only scoped to normal scope
// EXAMPLE: var here can be used anywhere in doSomething since that is the nearest method
// if we replace it with "let" we won't be able to use it outside that for loop
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Final ' + i);
}

doSomething();


  /////////////////
 /// CHAPTER 2 ///
/////////////////

// Types
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'banana', false];

// Enums
// numbers are auto assigned but its better practice to manually write them
// so that they are fixed later on upon addition or removal
enum Color { Red = 0, Green = 1, Blue = 2 };
let background = Color.Red;

// Type Assertions 
// Normal example of built in methods:
let message = 'abc';
let endsWithC = message.endsWith('c');

// The issue is if we have and how assertions comes into play:
let message2; // this is now type any (since any is the type assigned by defualt)
message2 = 'abcd';
// so if we try to do message2.we don't get any methods since ts things its of type any
// we can assert its type by doing the bellow allowing us to access the built in methods
let endsWith2 =(<string>message2).endsWith('2');

// another way to do the same assertion
// note the both methods don't change the actuall type of the variable
let endsWith2C = (message2 as string).endsWith('C');

  /////////////////
 /// CHAPTER 3 ///
/////////////////

let log = function(message) {
    console.log(message);
}

// this is called an arrow expression (aka lambda expression just called diffrently)
let doLog = (message) => {
    console.log(message);
}

// Custom types in ts aka classes
// Access modifiers: public , private , protected
// can be applied to methods as well

class Point{
    x?: number;
    y?: number;

    private z?: number; // this will only be acceceble from inside the class 

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X is: ' + this.x);
    }

    getDistance(another: Point) {
        console.log('Y is: ' + this.y);
    }
}

// When using the class we have to use new aka very similar to constructors
// if we don't the variable will throw an error at runtime
let point = new Point(1, 2);
let anotherPoint = new Point();
point.draw();


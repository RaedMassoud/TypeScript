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

let message3 = 'abc';

let log = function(message3: string) {
    console.log(message3);
}

// this is called an arrow expression (aka lambda expression just called diffrently)
let doLog = (message3: string) => {
    console.log(message);
}

// Custom types in ts aka classes
// Access modifiers: public , private , protected
// can be applied to methods as well

class Point{

    // When we prefix variables with access modifiers in the constructor
    // we dont have to declare them outside the constructor
    // ts will automatically create them for us
    // they are also automatically assigned
    
    // Naming convention: variables are prefixed with _ because we are using properties
    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log('X is: ' + this.x + ' Y is: ' + this.y);
    }

    // Properties
    // properties are used to protect variables
    // they are basically getters and setters
    // we can add logic to them as well
    get y() {
        return this._y !== undefined ? this._y : 0;
    }

    set y(value: number) {
        if(value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this._y = value;
    }

    get x() {
        return this._x !== undefined ? this._x : 0;
    }

    set x(value: number) {
        if(value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this._x = value;
    }

}

// When using the class we have to use new aka very similar to constructors
// if we don't the variable will throw an error at runtime
let point = new Point(1, 2);
let anotherPoint = new Point();
point.draw();

// using the properties
point.x = 10;
point.y = 20;


// We will have anther class but the proper way outside this file

// since Dot is a module we have to import it
import { Dot } from './dot';

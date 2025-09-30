// we need to export the class to use it outside this file
// this is called a module now
export class Dot {

    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X is: ' + this.x + ' Y is: ' + this.y);
    }
}
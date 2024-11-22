"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// we will use abstract class to define the methods that the child class should implement
// abstract class can only be parent class and cannot be instantiated
class Sorter {
    constructor() { } //this is a shorthand way of defining the property and assigning it to the argument
    sort() {
        const length = this.length;
        // Bubble Sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;

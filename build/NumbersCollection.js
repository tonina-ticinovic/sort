"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    //this is called as .length instead of .length() (because of get)
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        [this.data[leftIndex], this.data[rightIndex]] = [
            this.data[rightIndex],
            this.data[leftIndex],
        ];
        // const leftHand = this.data[leftIndex];
        // this.data[leftIndex] = this.data[rightIndex];
        // this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;

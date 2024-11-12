"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const length = this.collection.length;
        // Bubble Sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    [this.collection[j], this.collection[j + 1]] = [
                        this.collection[j + 1],
                        this.collection[j],
                    ];
                    // const leftHand = this.collection[j];
                    // this.collection[j] = this.collection[j + 1];
                    // this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0, -10]);
sorter.sort();
console.log(sorter.collection);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, -100]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);
const arbitraryCollection = new CharactersCollection_1.CharactersCollection('Xbaac');
arbitraryCollection.sort();
console.log(arbitraryCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();

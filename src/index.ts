import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -100]);
console.log(numbersCollection.data);

const arbitraryCollection = new CharactersCollection('Xbaac');
console.log(arbitraryCollection.data);

const sorterNumbers = new Sorter(numbersCollection);
const sorterString = new Sorter(arbitraryCollection);
sorterNumbers.sort();
sorterString.sort();
console.log(sorterNumbers.collection);
console.log(sorterString.collection);

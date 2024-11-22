import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -100]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);

const arbitraryCollection = new CharactersCollection('Xbaac');
arbitraryCollection.sort();
console.log(arbitraryCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();

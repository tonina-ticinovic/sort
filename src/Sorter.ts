// we will use abstract class to define the methods that the child class should implement
// abstract class can only be parent class and cannot be instantiated
export abstract class Sorter {
  constructor() {} //this is a shorthand way of defining the property and assigning it to the argument

  abstract get length(): number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
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

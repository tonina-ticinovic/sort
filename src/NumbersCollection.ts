export class NumbersCollection {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  //this is called as .length instead of .length() (because of get)
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];

    // const leftHand = this.data[leftIndex];
    // this.data[leftIndex] = this.data[rightIndex];
    // this.data[rightIndex] = leftHand;
  }
}

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](entry) {
    if (entry === 'number') return this._size;
    if (entry === 'string') return this._location;
    return this;
  }
}

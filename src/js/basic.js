export default class ArrayBufferConverter {
  constructor() {
    this.printBuffer = null;
  }

  load(str) {
    function getBuffer(data) {
      // const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      return ((input) => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        return [buffer, bufferView];
      })(data);
    }

    this.printBuffer = getBuffer(str);
    return this.printBuffer;
  }

  toString() {
    if (this.printBuffer) {
      const arr = [];
      this.printBuffer[1].forEach((a) => arr.push(String.fromCharCode(a)));
      return arr.reduce((a, b) => (a + b));
    }
    return 'ArrayBuffer пуст';
  }
}

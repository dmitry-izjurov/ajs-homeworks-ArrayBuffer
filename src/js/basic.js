export default class ArrayBufferConverter {
  constructor() {
    this.printBuffer = null;
  }

  load(buffer) {
    function getBuffer(data) {
      // const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      return ((input) => {
        // eslint-disable-next-line no-shadow
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        return [buffer, bufferView];
      })(data);
    }

    this.printBuffer = getBuffer(buffer);
    return this.printBuffer;
  }

  toString() {
    if (this.printBuffer) {
      let result = '';
      this.printBuffer[1].forEach((a) => {
        const char = String.fromCharCode(a);
        result += char;
      });
      return result;
    }
    return 'ArrayBuffer пуст';
  }
}

import ArrayBufferConverter from '../basic';

test('Объект должен загружать содержимое в ArrayBuffer', () => {
  const obj = new ArrayBufferConverter();
  obj.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(obj.printBuffer[0].byteLength).toBe(106);
});

test('Объект должен читать содержимое из ArrayBuffer', () => {
  const obj = new ArrayBufferConverter();
  obj.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(obj.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('Объект не должен читать содержимое из ArrayBuffer', () => {
  const obj = new ArrayBufferConverter();
  expect(obj.toString()).toBe('ArrayBuffer пуст');
});

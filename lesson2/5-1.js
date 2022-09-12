// 비구조화 할당 = 구조분해 할당
const example = { a: 123, b: { c: 135, d: 146 } };
const a = example.a;
const d = example.b.d;

const {
  a,
  b: { d },
} = example;
console.log(a);
console.log(d);

arr = [1, 2, 3, 4, 5];

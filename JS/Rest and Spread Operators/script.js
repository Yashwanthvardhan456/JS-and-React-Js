const demo = (a, b, ...numbers) => {
  console.log(a);
  console.log(b);
  return numbers;
};
console.log(demo(1, 2, 3, 4, 4, 2));

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 32,
};
const obj2 = {
  ...obj1,
  e: 4,
  f: 5,
};
console.log(obj2);

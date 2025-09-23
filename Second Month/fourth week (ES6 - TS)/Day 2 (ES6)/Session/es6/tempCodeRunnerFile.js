function* gen() {
  for (let i = 0; i < 3; i++) {
    yield i;
  }
}
let generator = gen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
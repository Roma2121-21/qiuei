//1

for (let i = 2; i < 8; i++) {
  console.log(i);
}

//2
for (let i = 5; i < 35; i += 4) {
  console.log(i);
}

//3
let mult = 1;
for (let i = 3; i < 8; i++) {
  mult *= i;
}
console.log(mult);

//4
const person = {
  firstName: "Roman",
  lastName: "Vashakmadze",
  age: 26,
};

console.log(`${person.firstName} ${person.lastName}`);

//5

Object.values(person).forEach((value) => {
  console.log(value);
});

//6
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});

//7
fruits.unshift("Grapes");
fruits.push("Pineapple");
console.log(fruits);

//8
let sum = 1;
for (let i = 1; i < 34; i++) {
  sum += i;
}
console.log(sum);

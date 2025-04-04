//1

function compare(m, n) {
  if (m === n) {
    return 0;
  }

  return m > n ? m : n;
}

//2

function sum(m, n) {
  return m + n;
}

//3
function getName() {
  console.log("Romani Vashakmadze");
}

//4
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName("Roman", "Vashakmadze"));

//5
function multiplier(n) {
  let m = 1;
  for (let i = 2; i <= n; i++) {
    m *= i;
  }
  return m;
}

//6
const student = {
  firstName: "Roman",
  lastName: "Vashakmadze",
  age: 26,
  scores: [4, 7, 5, 3, 2],
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(student.fullname());

//7
function getSumOfScores(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum;
}

//8
console.log(student.firstName, student.age);

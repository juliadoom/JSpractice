/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI " + BMIMark + "is higher than John's" + BMIJohn);
} else {
  console.log("Mark's BMI " + BMIMark + "is lower than John's" + BMIJohn);
}

//Fundamentals 1 Coding Challenge 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win!');
} else if (scoreDolphins < scoreKoalas) {
  console.log('Koalas win!');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Tie!');
}

const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if (scoreDolphins1 > scoreKoalas1) {
  console.log('Dolphins win!');
} else if (scoreDolphins1 < scoreKoalas1) {
  console.log('Koalas win!');
} else if (scoreDolphins1 === scoreKoalas1) {
  console.log('Tie!');
}

const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;
console.log(scoreDolphins2, scoreKoalas2);

if (scoreDolphins2 > scoreKoalas2) {
  console.log('Dolphins win!');
} else if (scoreDolphins2 < scoreKoalas2) {
  console.log('Koalas win!');
} else if (scoreDolphins2 === scoreKoalas2) {
  console.log('Tie!');
}

//Fundamentals 1 Coding Challenge 4
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill} and the tip was ${tip} and the total is ${bill + tip}`
);

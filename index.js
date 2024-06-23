const age = 18;
if (age === 18) console.log("You have become and adult!");

// === is a boolean value is also a comparison operator This is a strict comparison operator.

const favourite = Number(prompt("Whats your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23' == 23
  console.log("cool 23 is an amazing number.");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number is not 23 nor 7");
}

if (favourite !== 23) console.log("Why not to 23?"); //not equal.

const hasDriversLicens = true;
const hasGoodVision = false;

console.log(hasDriversLicens && hasGoodVision); //true + true = true. True + false = false.
console.log(hasDriversLicens || hasGoodVision); // true + true = true. True + false = true.
console.log(!hasDriversLicens); // False eftersom ! tecken betyder har inte.

const shouldDrive = hasDriversLicens && hasGoodVision;

// if(shouldDrive){
//     console.log("Sarah is able to drive")
// }else{
//     console.log('Some one else should drive...')
// }

const isTired = true;
console.log(hasDriversLicens || hasGoodVision || isTired);

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Some one else should drive...");
}

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphin wins with a score of ${scoreDolphins} points`);
} else if (scoreKoalas > scoreDolphins) {
  console.log(`Koala wins with a score of ${scoreKoalas} points`);
} else {
  console.log("Koalas and Dolpins scores equal.");
}

function ageCalculator(name, birthYear, currentYear) {
  let myString = name + " is " + (currentYear - birthYear) + " years old.";
  return myString;
}

console.log(ageCalculator("Miranda", 1983, 2015));

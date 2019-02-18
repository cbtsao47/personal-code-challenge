// Write a function called 'isOldEnoughToDrink'
// Given a number, in this case an age, ' isOldEnoughToDrink' returns whether a person of this given age is old enough to legally drink in the United States.
// Notes
// the legal drinking age in US is 21

function isOldEnoughToDrink(age) {
  if (age >= 21) {
    return true;
  }
  return false;
}
console.log(isOldEnoughToDrink(21));
console.log(isOldEnoughToDrink(10));

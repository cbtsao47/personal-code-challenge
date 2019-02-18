// Write a function called getProperty
// Given an object and a key, the function returns the value of the property at the given key

// if there is no property at the given key , it should return undefined.
const obj = {
  test: 1
};
function getProperty(obj, key) {
  for (el in obj) {
    if (el === key) {
      return obj[el];
    }
  }
}

// Given an obj and a key, remove the given key from the obj

const example = {
  ex: 1,
  ex2: 2
};
function removeProperty(obj, key) {
  return delete obj[key];
}

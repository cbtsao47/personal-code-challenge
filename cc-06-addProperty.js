// Given an object, and a key, addproperty sets a new property on the given object with a value of true

const example = {
  ex: 1
};
function addProperty(obj, key) {
  obj[key] = true;
  return;
}

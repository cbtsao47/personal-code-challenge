// Given a person's name and age, checkAge returns one of two messages
// "Go home, {your name}!" if they're younger than 21
// "Welcome, {your name}!" if they're 21 or older

function checkAge(name, age) {
  if (age >= 21) {
    return `welcome, ${name}`;
  }
  return `Go home, ${name}`;
}

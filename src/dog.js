/* ----------------------

DONE - Note: BEFORE tackling each question below,
read the tests in the test file. There are
THREE bugs added that you will have to find and
fix for the tests to work properly.

1. done - Update the sound property to "woof" and the legs
   property to 4.
2. done - Add a new property called "sticks" and set it to 0.
3. done - Add a property called "breed".
4. done - Update the getOlder method so that it increases
   the age by dog years (7) instead of by one.
5. done - Add a new method called "fetch" that increases the
   the stick property one and then returns the number
   of sticks fetched.

---------------------- */

const Animal = require("./animal");

class Dog extends Animal {
  constructor(name, age, legs, sound, sticks, breed) {
    super(name, age, legs, sound);
    this.name = name;
    this.age = 1;
    this.legs = 4;
    this.sound = "woof!";
    this.sticks = 0;
    this.breed = "breed";
  }
  getOlder() {
    this.age += 7;
    return this.age;
  }
  fetch() {
    this.sticks++;
    return this.sticks;
  }
}

module.exports = Dog;

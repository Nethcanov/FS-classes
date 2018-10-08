/* ----------------------

Note: BEFORE tackling each question below,
read the tests in the test file. There are
THREE bugs added that you will have to find and
fix for the tests to work properly.

1. Update the sound property to "woof" and the legs
   property to 4.
2. Add a new property called "sticks" and set it to 0.
3. Update the getOlder method so that it increases
   the age by dog years (7) instead of by one.
4. Add a new method called "fetch" that increases the
   the stick property one and then returns the number
   of sticks fetched.

---------------------- */

const Animal = require('./animal');

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

module.exports = Dog;

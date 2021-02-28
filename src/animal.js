/* ----------------------

Note: BEFORE tackling each question below,
read the tests in the test file.

1. done - Add a property called "sound".
2. done - Add a method called "getOlder" so that it increases
   the age by 1 whenever it is called and then 
   returns the new age.
3. done - Add a new method called speak that returns the
   sound property whenever it is called.

---------------------- */

class Animal {
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }

  speak() {
    return this.sound;
  }

  getOlder() {
    return this.age++;
  }
}

module.exports = Animal;

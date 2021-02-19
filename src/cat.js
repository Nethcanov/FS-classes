/* ----------------------

Note: BEFORE tackling each question below,
write related tests in the test file.

1. done - Update the sound property to "meow".
2. done - Create one additional property (your choice).
3. half done - Update the getOlder method so that it
   increases the age by cat years each time
   it is called. Cat years are a bit complex:
   cats are 15 years by age 1, 24 years by age 2,
   and then only increase by 4 years every
   subsequent year.
4. done - Create one additional method (your choice).

---------------------- */

const Animal = require("./animal");

class Cat extends Animal {
  constructor(name, age, sound, favoriteToy, attacks) {
    super(name, age, sound);
    this.name = name;
    this.age = 1;
    this.sound = "meow!";
    this.favoriteToy = favoriteToy;
    this.attacks = 1;
  }

  getOlder() {
    if (this.age === 1) {
      return (this.age += 14);
    } else if (this.age === 15) {
      return (this.age += 9);
    } else {
      return (this.age += 4);
    }
  }

  buyOrnaments() {
    if (this.attacks <= 5) {
      return "Move ornaments to somewhere safe!";
    }
    if (this.attacks > 5) {
      return "Buy some unbreakable ornaments!";
    }
  }

  printToy() {
    return `${this.name}'s favorite toy is a ${this.favoriteToy}.`;
  }
}

module.exports = Cat;

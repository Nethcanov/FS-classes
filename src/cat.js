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
  constructor(name, age, legs, sound, favoriteToy) {
    super(name, age, legs, sound);
    this.name = name;
    this.age = 1;
    this.legs = 4;
    this.sound = "meow!";
    this.favoriteToy = "squeaky mouse";
  }
  //final if does not work yet
  getOlder() {
    let catYears = 0;

    if ((this.age = 1)) {
      catYears = 15;
    }
    if ((this.age = 15)) {
      catYears = 24;
    }
    // if(this.age >=24){
    //    catYears = this.age + 2;
    // }
    return catYears;
  }

  toy(favoriteToy) {
    return `The cat's favorite toy is a ${this.favoriteToy}.`;
  }
}

module.exports = Cat;

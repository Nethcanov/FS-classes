/* ----------------------

Note: BEFORE tackling each question below,
write related tests in the test file.

1. done - Create a class called "Poodle" that extends
   the dog class.
2. done - Update the breed property to "poodle".
3. not working - Create a new method called "lifetimeHaircuts" that
   returns the number of haircuts the poodle
   has received over its lifetime. To calculate this
   total, take the age and multiply by 7 (the average
   number of haircuts a poodle receives per year). 

---------------------- */

const Dog = require("./dog");

class Poodle extends Dog {
  constructor(name, age, breed, mealCount) {
    super(name, age, breed);
    this.name = "Trixie";
    this.age = 1;
    this.breed = "poodle";
    this.mealCount = mealCount;
  }
  lifetimeHaircuts() {
    return this.age * 7;
  }

  printFoodSchedule() {
    let foodSchedule = "";
    if (this.mealCount === 0) {
      foodSchedule = `${this.name} eats three times a day: time for ${this.name}'s first meal!`;
    }
    if (this.mealCount === 1) {
      foodSchedule = `${this.name} eats three times a day: feed ${this.name} two more times!`;
    }
    if (this.mealCount === 2) {
      foodSchedule = `${this.name} eats three times a day: feed ${this.name} one more time!`;
    }
    if (this.mealCount >= 3) {
      foodSchedule = `${this.name} has had all today's meals.  Do not feed ${this.name} anymore!`;
    }
    return foodSchedule;
  }
}

module.exports = Poodle;

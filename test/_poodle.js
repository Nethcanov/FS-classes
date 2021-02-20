const { expect } = require("chai");
const { isClass } = require("./utilities");
const Poodle = require("../src/poodle");

let poodle = null;

describe("Poodles", () => {
  beforeEach(() => {
    poodle = new Poodle();
  });

  describe("The Poodle class", () => {
    it("should be a class", () => {
      expect(isClass(Poodle)).to.be.true;
    });
    it("should have properties for name, age, breed", () => {
      expect(poodle.hasOwnProperty("name")).to.equal(true);
      expect(poodle.hasOwnProperty("breed")).to.equal(true);
      expect(poodle.hasOwnProperty("mealCount")).to.equal(true);
    });

    it("should have have preset properties for breed and name", () => {
      expect(poodle.breed).to.equal("poodle");
      expect(poodle.name).to.equal("Trixie");
    });
  });

  describe("lifetimeHaircuts", () => {
    it("should exist on the Dog prototype", () => {
      expect(Poodle.prototype.lifetimeHaircuts).to.exist;
    });

    it("should increase the number of haircuts by 7 each time it is called", () => {
      poodle.getOlder();
      expect(poodle.lifetimeHaircuts()).to.equal(7);
    });
  });

  describe("printFoodSchedule", () => {
    it("should exist on the Dog prototype", () => {
      expect(Poodle.prototype.printFoodSchedule).to.exist;
    });
    it("should return how mnay feeds are left", () => {
      poodle.mealCount = 0;
      expect(poodle.printFoodSchedule()).to.equal(
        "Trixie eats three times a day: time for Trixie's first meal!"
      );
      poodle.mealCount = 1;
      expect(poodle.printFoodSchedule()).to.equal(
        "Trixie eats three times a day: feed Trixie two more times!"
      );
      poodle.mealCount = 2;
      expect(poodle.printFoodSchedule()).to.equal(
        "Trixie eats three times a day: feed Trixie one more time!"
      );
      poodle.mealCount = 5;
      expect(poodle.printFoodSchedule()).to.equal(
        "Trixie has had all today's meals.  Do not feed Trixie anymore!"
      );
    });
  });
});

const { expect } = require("chai");
const { isClass } = require("./utilities");
const Dog = require("../src/dog");

let dog = null;

describe("Dog", () => {
  //one Dogs
  beforeEach(() => {
    dog = new Dog();
  });

  describe("The Dog class", () => {
    //x
    it("should be a class", () => {
      expect(isClass(Dog)).to.be.true;
    });

    it("should have properties for name, age, legs, sound, sticks, and breed", () => {
      expect(dog.hasOwnProperty("name")).to.equal(true); //didn't have everything in here
      expect(dog.hasOwnProperty("age")).to.equal(true);
      expect(dog.hasOwnProperty("legs")).to.equal(true);
      expect(dog.hasOwnProperty("sound")).to.equal(true);
      expect(dog.hasOwnProperty("sticks")).to.equal(true);
      expect(dog.hasOwnProperty("breed")).to.equal(true);
    });

    it("should have have preset properties for sound and legs", () => {
      expect(dog.sound).to.equal("woof!");
      expect(dog.legs).to.equal(4);
    });
  });

  describe("The getOlder method", () => {
    it("should exist on the Dog prototype", () => {
      expect(Dog.prototype.getOlder).to.exist;
    });

    it("should increase the age by 7 each time it is called", () => {
      dog.getOlder(); //8
      dog.getOlder(); //15
      dog.getOlder(); //22
      expect(dog.age).to.equal(22); //14
    });
  });

  describe("The fetch method", () => {
    it("should exist on the Dog prototype", () => {
      expect(Dog.prototype.fetch).to.exist;
    });

    it("should increase the sticks count each time it is called", () => {
      dog.fetch();
      dog.fetch();
      expect(dog.sticks).to.equal(2); //dog.name
    });
  });
});

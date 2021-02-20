const { expect } = require("chai");
const { isClass } = require("./utilities");
const Dog = require("../src/dog");

let dog = null;

describe("Dog", () => {
  // Dogs - same, doesn't matter
  beforeEach(() => {
    dog = new Dog();
  });

  describe("The Dog class", () => {
    //x
    it("should be a class", () => {
      expect(isClass(Dog)).to.be.true;
    });

    it("should have properties for name, sound, sticks, and breed", () => {
      expect(dog.hasOwnProperty("name")).to.equal(true);
      expect(dog.hasOwnProperty("sound")).to.equal(true);
      expect(dog.hasOwnProperty("sticks")).to.equal(true);
      expect(dog.hasOwnProperty("breed")).to.equal(true);
    });

    it("should have have preset properties for sound", () => {
      expect(dog.sound).to.equal("woof!");
    });
  });

  describe("The getOlder method", () => {
    it("should exist on the Dog prototype", () => {
      expect(Dog.prototype.getOlder).to.exist;
    });

    it("should increase the age by 7 each time it is called", () => {
      dog.getOlder(); //7
      dog.getOlder(); //14
      expect(dog.getOlder()).to.equal(21); //calling it the third time
      expect(dog.age).to.equal(21); //not calling the function just returning the dog age
    });
  });

  describe("The fetch method", () => {
    it("should exist on the Dog prototype", () => {
      expect(Dog.prototype.fetch).to.exist;
    });

    it("should increase the sticks count each time it is called", () => {
      dog.fetch(); //0 - increments after returned?
      dog.fetch(); //1
      expect(dog.fetch()).to.equal(2);
      expect(dog.sticks).to.equal(3); //why is this increasing the stick count?
    });
  });
});

const { expect } = require("chai");
const { isClass } = require("./utilities");
const Cat = require("../src/cat");

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe("The Cat class", () => {
    it("should be a class", () => {
      expect(isClass(Cat)).to.be.true;
    });

    it("should have properties named name, age, legs, sound, favoriteToy", () => {
      expect(cat.hasOwnProperty("name")).to.equal(true);
      expect(cat.hasOwnProperty("age")).to.equal(true);
      expect(cat.hasOwnProperty("legs")).to.equal(true);
      expect(cat.hasOwnProperty("sound")).to.equal(true);
      expect(cat.hasOwnProperty("favoriteToy")).to.equal(true);
    });

    it("should have have preset properties for sound and legs", () => {
      expect(cat.sound).to.equal("meow!");
      expect(cat.legs).to.equal(4);
      expect(cat.favoriteToy).to.equal("squeaky mouse");
    });
  });

  //no speak method as it is just updating

  xdescribe("The getOlder method", () => {
    it("should exist on the Cat prototype", () => {
      expect(Cat.prototype.getOlder).to.exist;
    });

    it("should increase the age when called", () => {
      cat.getOlder();
      cat.getOlder();
      // cat.getOlder();
      expect(cat.getOlder()).to.equal(24);
    });
  });

  describe("The toy method", () => {
    it("should exist on the Cat prototype", () => {
      expect(Cat.prototype.toy).to.exist;
    });

    it("should return a sentence about the favorite toy", () => {
      expect(cat.toy()).to.equal("The cat's favorite toy is a squeaky mouse.");
    });
  });
});

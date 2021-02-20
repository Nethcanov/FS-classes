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

    it("should have properties named name, sound, favoriteToy", () => {
      expect(cat.hasOwnProperty("name")).to.equal(true);
      expect(cat.hasOwnProperty("sound")).to.equal(true);
      expect(cat.hasOwnProperty("favoriteToy")).to.equal(true);
      expect(cat.hasOwnProperty("ornamentAttacks")).to.equal(true);
    });

    it("should have have preset properties for name, sound, legs, favoriteToy and ", () => {
      expect(cat.name).to.equal("Tiddles");
      expect(cat.sound).to.equal("meow!");
      expect(cat.favoriteToy).to.equal("squeaky mouse");
    });
  });

  describe("The getOlder method", () => {
    it("should exist on the Cat prototype", () => {
      expect(Cat.prototype.getOlder).to.exist;
    });

    it("should increase the age when called", () => {
      expect(cat.getOlder()).to.equal(15);
      expect(cat.getOlder()).to.equal(24);
      expect(cat.getOlder()).to.equal(28);
    });
  });

  describe("The buyOrnaments method", () => {
    it("should exist on the Cat prototype", () => {
      expect(Cat.prototype.buyOrnaments).to.exist;
    });

    it("should return an answer when called", () => {
      cat.ornamentAttacks = 4;
      expect(cat.buyOrnaments()).to.equal("Move ornaments to somewhere safe!");
      cat.ornamentAttacks = 6;
      expect(cat.buyOrnaments()).to.equal("Buy some unbreakable ornaments!");
    });
  });

  describe("The printToy method", () => {
    it("should exist on the Cat prototype", () => {
      expect(Cat.prototype.printToy).to.exist;
    });

    it("should return a sentence about the favorite toy", () => {
      expect(cat.printToy()).to.equal(
        "Tiddles's favorite toy is a squeaky mouse."
      );
    });
  });
});

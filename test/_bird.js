const { expect } = require("chai");
const { isClass } = require("./utilities");
const Bird = require("../src/bird");

let bird = null;

describe("Bird", () => {
  beforeEach(() => {
    bird = new Bird();
    bird.name = "Fred";
  });

  describe("The Bird class", () => {
    it("should be a class", () => {
      expect(isClass(Bird)).to.be.true;
    });

    it("should have properties for name, age, legs, sound, wings and peck", () => {
      expect(bird.hasOwnProperty("name")).to.equal(true); //didn't have everything in here
      expect(bird.hasOwnProperty("legs")).to.equal(true);
      expect(bird.hasOwnProperty("sound")).to.equal(true);
      expect(bird.hasOwnProperty("wings")).to.equal(true);
      expect(bird.hasOwnProperty("peck")).to.equal(true);
    });

    it("should have have preset properties for name, sound, legs and wings", () => {
      expect(bird.name).to.equal("Fred");
      expect(bird.sound).to.equal("tweet!");
      expect(bird.legs).to.equal(2);
      expect(bird.wings).to.equal(2);
    });
  });

  describe("The printInfo method", () => {
    it("should exist on the Bird prototype", () => {
      expect(Bird.prototype.printInfo).to.exist;
    });

    it("should return all the info about the bird", () => {
      expect(bird.printInfo()).to.equal(
        "Fred is a 1 year old bird with 2 legs and 2 wings.  He goes tweet!"
      );
    });
  });

  describe("The peckMirror method", () => {
    it("should exist on the Bird prototype", () => {
      expect(Bird.prototype.peckMirror).to.exist;
    });

    it("should increase the peckMirror count when peck increases", () => {
      bird.peckMirror(); //0
      bird.peckMirror(); //1
      expect(bird.peckMirror()).to.equal(2);
    });
  });

  describe("The totalNailTrims method", () => {
    it("should exist on the Bird prototype", () => {
      expect(Bird.prototype.totalNailTrims).to.exist;
    });
    it("should increase the nail trim by 2 every year", () => {
      bird.totalNailTrims(); //
      expect(bird.totalNailTrims()).to.equal(2);
    });
  });
});

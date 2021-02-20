const Animal = require("./animal");

class Bird extends Animal {
  constructor(name, wings, peck) {
    super(name);
    this.name = "Fred";
    this.legs = 2;
    this.sound = "tweet!";
    this.wings = 2;
    this.peck = 0;
  }

  printInfo() {
    return `${this.name} is a ${this.age} year old bird with ${this.legs} legs and ${this.wings} wings.  He goes ${this.sound}`;
  }

  peckMirror() {
    return this.peck++;
  }
  totalNailTrims() {
    return this.age * 2;
  }
}

module.exports = Bird;

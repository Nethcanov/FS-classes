const Animal = require("./animal");

class Bird extends Animal {
  constructor(name, age, legs, sound, wings, peck) {
    super(name, age, legs, sound);
    this.name = name;
    this.age = 1;
    this.legs = 2;
    this.sound = "tweet!";
    this.wings = 2;
    this.peck = 1;
  }

  printInfo() {
    return `${this.name} is a ${this.age} year old bird with ${this.legs} legs and ${this.wings} wings.  He goes ${this.sound}`;
  }

  peckMirror() {
    return this.peck++;
  }
}

module.exports = Bird;

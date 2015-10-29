var myArray = Object.create(Array.prototype);
console.log(myArray.push);


function Cat(name) {
  // (only if you're using new)
  // var this = {}
  this.name = name;
  // return this
}
Cat.prototype.meow = function() {console.log('meow')} // access the prototype object which is initially {}

var c = new Cat('chairman meow');
c.prototype
Object.getPrototypeOf







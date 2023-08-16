function Person(name, first, second, third) {
  (this.name = name), (this.first = first), (this.second = second);
}

Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

let kim = new Person("kim", 10, 20, 30);
let lee = new Person("lee", 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

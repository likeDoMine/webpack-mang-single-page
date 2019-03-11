//import React, { useState, useEffect } from 'react'

function Person(){

  return null;
}
//var person = new Person();  //很简单新构建一个Person
//person.name = 'Kevin';

// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
//属性被继承了
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin

//那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？
/**
 * 其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，
 * 也就是这个例子中的 person1 和 person2 的原型
 */
//实例的__proto__原型 === 构造函数的原型, 通过__proto__指向prototype
console.log(person1.__proto__ === Person.prototype) //true

//既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？
//constructor: 每个原型都有一个 constructor 属性指向关联的构造函数。
console.log(Person.prototype.constructor === Person)    //true

// 顺便学习一个ES5的方法,可以获得对象的原型
//Object.getPrototypeOf(person1) === person1.__proto__
console.log(Object.getPrototypeOf(person1) === Person.prototype) // true

//了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：
//实例与原型
//当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。
//整理一下目前原型链对象的整体走势, 顶层Object
//Object
console.log("person._proto__",person1.__proto__ ===  Person.prototype);

//当获取 person.constructor 时，其实 person 中并没有 constructor 属性,
// 当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：
//原型链上实现的继承
console.log("Person.prototype.constructor",Person.prototype.constructor === Person)
console.log("person.constructor", person1.constructor === Person, person1.constructor === Person.prototype.constructor)

console.log("Person.prototype.__proto__", Person.prototype.__proto__ === Object.prototype);

//__proto__其实是一个非标准的方法访问原型，当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。
//等于就是获取用户的原型链,原型链的追踪
console.log("Person继承于那一个原型", Person.prototype.__proto__.constructor === Object);








export default Person;

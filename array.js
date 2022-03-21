///// Concat array /////
// let arr1=[1,2,3];
// let arr2=[5,6,7];
// console.log(arr1.concat(arr2,8,9))

///// Splice array /////
// let arr=["Apple","Orange","Mango"];
// arr.splice(0,2);
// console.log(arr)

///// slice array /////
// let arr=["Apple","Orange","Mango"];

// console.log(arr.slice(1,2))

///// forEach array /////
// let arr=["Apple","Orange","Mango"];
// arr.forEach((item,index,array)=>{
//         console.log(`${item} is at ${index} of ${array}`)
// })

///// filter array /////
// let arr=["Apple","Orange","Mango"];
// let a = arr.filter((item,index,array)=>{
//         console.log(item,index)
// })


// function Obj(){
//     this.val = new Array(10).join("-")
// }

// window.obj = new Obj();
// console.log(window.obj)
// var map = new Map()
// map.set(window.obj, 123)
// console.log(map.obj)
//delete window.obj

// let options ={
//     size:{
//         width:100,
//         heigth:200
//     },
//     items:["cake","donut"],
//     extra:true
// }

// ///// Desructing of object /////
// let{
// size:{
//     width,
//     heigth
// },
// items:[item1,item2],
// title='Menu',
// extra

// }=options;
// console.log(title)
// console.log(width)
// console.log(heigth)
// console.log(item1)
// console.log(item2)
// console.log(extra)


// let a ={
//     first_name:"Ahmed",
//     age:30,
//     b:{
//         last_name:"Ali",
//         cast:"Awan"
//     }
// };

// let{
// first_name,
// age,
// b:{
//     last_name,
//     cast
// }
// }=a;
// console.log(first_name)
// console.log(last_name)
// console.log(age)
// console.log(cast)

///// Iterative Process /////
// function pow(x,n){
//     let result = 1;
//     for(let i=0;i<n;i++){
//         result*=x;
//     }
//     return result;
// }
// console.log(pow(2,3))

///// Recursive Process /////
// function pow(x,n){
//     if(n==1){
//         return x;
//     }
//     else{
//         return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2,3))

// for (let i = 0; i < 5; i++) {
// 	console.log("Inside the loop:", i);
// }

// console.log("Outside the loop:", i);

// function showName(firstName, lastName, ...abc) {
//     console.log( firstName + ' ' + lastName ); // Julius Caesar
  
//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     console.log( abc[0] ); // Consul
//     console.log( abc[1] ); // Imperator
//     console.log( abc.length ); // 2
//   }
  
//   showName("Julius", "Caesar", "Consul", "Imperator");

// let book ={
//     author:"Ahmed",
//     published:1999,
//     name:"JavaScript"
// };
// const bookSummary = bookDes.bind(book)
// bookSummary()
// let book2 ={
//     author:"Ali",
//     published:1996,
//     name:"React"
// };
// function bookDes(){
//     console.log(`The book author name ${this.author} 
//     and published in ${this.published} 
//     and name of book ${this.name}
//     }`)
// }
// bookDes.bind(book2)
// bookSummary()
// let x = 1000;
// function parent(){
  
//     function child(){
//         console.log(x);
//     }
//     child()
// }
// parent()

// let user ={
//     name:"Ahmed"
// };
// let des = Object.getOwnPropertyDescriptor(user,'name');
// console.log(JSON.stringify(des,null,2))
// let user2={};
// Object.defineProperty(user2,"name",{
//     value:"Ahmed"
// })
// let descriptor = Object.getOwnPropertyDescriptor(user2,"name")
// console.log(JSON.stringify(descriptor,null,2))

// let user3={
//     name:"John",
//     age:44
// };
// Object.defineProperty(user3,"name",{
//     writable:false,
//     enumerable:false,
//     configurable:false
// })
// Object.defineProperty(user3,'age',{
//     writable:true
    
// })
// delete user3.name
// delete user3.age
// user3.name="Ahmed"
// user3.age='29'
// console.log(user3)
// console.log(Object.keys(user3))
// console.log(user3.name)
// console.log(user3.age)

// let user ={
//     first_name:"Awan",
//     last_name:"One",

//     get fullName(){
//         return `${this.first_name}  ${this.last_name}`
//     },
//     set fullName(value){
//         [this.first_name,this.last_name] = value.split("");
//     }
// };
// user.fullName = "Ahmed Ali"
// console.log(user.first_name)
// console.log(user.last_name)

//let x={};
// Object.getPrototypeOf(x)
// x.__proto__
// console.log(x)

// function User(name,level){
//     this.name = name;
//     this.level = level;
// }
// User.prototype.greet = function(){
//     return`${this.name} say Hello`
// }
// function Warrior(name,level,weapon){
//     User.call(this,name,level)
//     this.weapon = weapon;
// }
// function Healer(name,level,heal){
//     User.call(this,name,level)
//     this.heal = heal;
// }
// Warrior.prototype.attack = function () {
//     return `${this.name} attacks with the ${this.weapon}.`
//   }
  
//   Healer.prototype.heal = function () {
//     return `${this.name} casts ${this.heal}.`
//   }
//   Warrior.prototype = Object.create(User.prototype)
// Healer.prototype = Object.create(User.prototype)
// // let user = new User("Ahmed",1)
// // console.log(user)
// const hero1 = new Warrior('Bjorn', 1, 'axe')
// const hero2 = new Healer('Kanin', 1, 'cure')
// hero1.greet()
// console.log(hero1.greet())

// const x = function () {}

// // Initialize a constructor from a function
// const constructorFromFunction = new x()

// console.log(constructorFromFunction)

// const y = class {}

// // Initialize a constructor from a class
// const constructorFromClass = new y()

// console.log(constructorFromClass)

// function Hero1(name, level) {
//     this.name = name
//     this.level = level
//   }
  
//   // Adding a method to the constructor
//   Hero1.prototype.greet = function () {
//     return `${this.name} says hello.`
//   }
//   const hero2 = new Hero1('Varg', 1)
//   console.log(hero2)
// class Hero {
//     constructor(name, level) {
//       this.name = name
//       this.level = level
//     }
  
//     // Adding a method to the constructor
//     greet() {
//       return `${this.name} says hello.`
//     }
//   }
//   const hero1 = new Hero('Varg', 1)
//   console.log(hero1)


//   // Creating a new constructor from the parent
// function Mage(name, level, spell) {
//     // Chain constructor with call
//     Hero1.call(this, name, level)
  
//     this.spell = spell
//   }
  
//   // Creating a new object using Hero's prototype as the prototype for the newly created object.
//   Mage.prototype = Object.create(Hero1.prototype)
//   const hero3 = new Mage('Lejon', 2, 'Magic Missile')
//   console.log(hero3)


// function Hero(name, level) {
//     this.name = name
//     this.level = level
//   }
  
//   // Adding a method to the constructor
//   Hero.prototype.greet = function () {
//     return `${this.name} says hello.`
//   }
  
//   // Creating a new constructor from the parent
//   function Mage(name, level, spell) {
//     // Chain constructor with call
//     Hero.call(this, name, level)
  
//     this.spell = spell
//   }
  
//   // Creating a new object using Hero's prototype as the prototype for the newly created object.
//   Mage.prototype = Object.create(Hero.prototype)
// Mage()
const person1 = { name: "Hiwoong", age: 39 };

const person2 = Object.create({ name: "Hiwoong", age: 39 });
 // 인자는 오브젝트 이거나 null인형태

 // const person3 = Object.create(39);

 let obj1: object = {};

 obj1 = {name: 'Hiwoong'};

 obj1 = [{name: 'Hiwoong'}];

 obj1 = 39; // Error

 obj1 = 'hiwoong'; // Error

 obj1 = true; // Error

 
 obj1 = 100n; // Error

 
 obj1 = Symbol(); // Error

 
 obj1 = null; // Error

 
 obj1 = undefined; // Error


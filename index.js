console.log('அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு');
console.log('தெய்வத்தான் ஆகா தெனினும் முயற்சிதன் மெய்வருத்தக் கூலி தரும்.');
console.log('JS Tutorial');

let testName;
console.log(testName);

const interestRate = 0.3;
//interestRate = 1; // This gives error as constant can't be reassigned
console.log("Interest Rate: ", interestRate);

// *** primitive types ***
let devName = 'Vish'; //String 
let age = 30; //integer
let isApproved = false; //boolean
let firstName = undefined; // undefined
let lastName = 'red'; //String
let selectedColor = null; //

console.log("typeof(devName) : ", typeof(devName));
console.log("typeof(age) : ", typeof(age));
console.log("typeof(isApproved : ", typeof(isApproved));
console.log("typeof(firstName) : ", typeof(firstName));
console.log("typeof(lastName) : ", typeof(lastName));
console.log("typeof(selectedColor) : ", typeof(selectedColor));

// In a dynamic lang you can change the String to int and the typeof changes auto

age = 'thirty';
console.log("typeof(age) : ", typeof(age));

// *** reference types - Object, Array & Function

// *** object
let employee = {
    employeeName: 'Vishnu',
    employeeCode: 7
};

console.log ("Dot notation ~ employee.employeeName : ", employee.employeeName); //dot notation
console.log ("Bracket notation ~ employee['employeeName'] : ", employee['employeeName']); //bracket notation, used when the target property will be on runtime
console.log ("Print object ~ employee : ", employee);

// *** Array
let availableColors = ['red', 'blue', 'green'];
console.log("Available Colors: ", availableColors);

console.log("Available Colors - index 0: ", availableColors[0]);
availableColors[0] = 12345;
console.log("Available Colors - index 0: ", availableColors[0]);

// *** Functions

function displayGreetings(name){
    console.log('Good Morning! ' +name);
}

displayGreetings();
displayGreetings("Snoopy");

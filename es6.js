console.log('ES6 Tutorial');
function sayHelloUsingVar(){
    console.log("sayHelloUsingVar")
    for(var i =0; i < 5 ; i++){
        console.log(i);
    }
    console.log(i);
}

sayHelloUsingVar();
// console.log(i); //-> Error: i not defined


// let only within scope - use let mostly, var only rare as required.
function sayHelloUsingLet(){
    console.log("sayHelloUsingLet")
    for(let j =0; j < 5 ; j++){
        console.log(j);
    }
    //console.log(j); //-> Error j not defined
}

sayHelloUsingLet();

const aConstVal = 100;
// const aConstVal2; // error: must be assigned a value
// aConstVal2 = 100;

console.log('aConstVal : ', aConstVal);

// notice function declaration using the function keyword for walk and talk and not used - simple notation from ES6 for sleep and eat
const person = {
    name: "vishnu",
    walk: function() {},
    talk: function() {},
    sleep() {},
    eat() {
        console.log(this);
    }
}

console.log('print person - ', person);

person.talk(); //Dot notation

person['name'];//Bracket notation - useful when the property is dynamic

person.name = "Parandhaman";
console.log("Print person name : ", person.name);

person.eat();
const eat = person.eat.bind(person);
const eatNoBind = person.eat;
eat(); // https://www.youtube.com/watch?v=NCwa_xi0Uuc&t=87s says I should not get window object but undefined. BUT i get the window object
eatNoBind();


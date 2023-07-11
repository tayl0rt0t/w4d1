/*
Hamster
attributes:

owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15
methods:

wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price
*/
class Hamster{
    constructor(owner, name, price){
        this.owner = owner,
        this.name = name,
        price = 15,
        this.price = price
        
    }
    wheelRun(){
        console.log('squeak' * 2)
    }
    eatFood(){
        console.log('nibble' * 2)
    }
    getPrice(){
        console.log(this.price)
    }

}

const H1 = new Hamster('Tay','Hamtaro');
/*
Person
attributes:

name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:

getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood
exercise() - decrement weight
/ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)/
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

*/

class Person {
    constructor(name, age, height, weight, mood, bankAccount, ...hamsters){
        this.name = name,
        age = 0,
        this.age = age,
        height = 0
        this.height = height,
        weight = 0,
        this.weight = weight,
        mood = 0,
        this.mood = mood,
        bankAccount = 0,
        this.bankAccount = bankAccount,
        this.hamsters = hamsters

    }
    getName(){
        console.log(this.name);
        return this.name;
    }
    getAge(){
        console.log(`age: ${this.age}`);
        return this.age;
    }
    getWeight(){
        console.log(this.weight);
        return this.weight;
    }
    greet(){
        console.log(`Hello, ${this.name}!`)
    }
    eat(){
        this.weight++;
        this.mood++
        console.log(`weight: ${this.weight} mood: ${this.mood}`);
    }
    excercise(){
        this.weight--;
        console.log(this.weight);
    }
   
    ageUp(){
        this.age++,
        this.height++,
        this.weight++,
        this.mood--,
        this.bankAccount += 10
    }
/*
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
*/
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount = this.bankAccount - hamster.price;
        
    }
};
const P1 = new Person('Tay',32,67,145,3,20);
P1.ageUp();
P1.ageUp();
P1.ageUp();
P1.getAge();
P1.buyHamster(H1);


console.log(P1.bankAccount);

/*
Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice
*/
const Timmy = new Person;
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.eat();
Timmy.excercise();
Timmy.excercise();
Timmy.excercise();
Timmy.excercise();
Timmy.excercise();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();

const Gus = new Hamster("Timmy",'Gus',);
Timmy.buyHamster(Gus);
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();
Timmy.ageUp();

Timmy.eat();
Timmy.eat();
Timmy.excercise();
Timmy.excercise();
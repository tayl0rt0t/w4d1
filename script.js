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

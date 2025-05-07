class Person{
    constructor(fullName, favColor){
        this.name = fullName;
        this.favColor = favColor;
    }
    greet(){
        console.log("Hello Welcome! My name is " + this.name + " and I love " + this.favColor + " color!");
    }
}

//module.exports = Person;
export default Person;
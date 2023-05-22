class Person {
  constructor(firstName, lastName, age, sex, AadharNumber ) {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.age = age; 
    this.sex = sex; 
    this.AadharNumber = AadharNumber;
  }
  
  // MEMBER FUNCTIONS
  getDeets() {
     console.log(`\n FirstName : ${this.firstName}, \n LastName : ${this.lastName}, \n Age : ${this.age}, \n Sex : ${this.sex}, \n AadharNumber : ${this.AadharNumber} \n`);
  }
  
 
  
} 
const person1 = new Person("Rey", "Mysterio", 35, "M", "7631 7990 1976");
person1.getDeets();
const person2 = new Person("John", "Cena", 42, "M", "7316 3472 9634");
person2.getDeets();
 
// Output Link: https://jsfiddle.net/3ru2zm7n/14/

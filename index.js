class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }
  
    celebrateBirthday() {
      this.age++;
      console.log(`Happy Birthday, ${this.getFullName()}! You are now ${this.age} years old.`);
    }
  }
  
  // Example usage
  const person1 = new Person('John', 'Doe', 25, 'Male');
  const person2 = new Person('Jane', 'Smith', 30, 'Female');
  
  person1.greet();
  person2.greet();
  
  person1.celebrateBirthday();
  person1.greet();
  
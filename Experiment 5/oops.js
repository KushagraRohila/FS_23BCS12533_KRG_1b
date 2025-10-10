class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, program, gpa) {
    super(name, age);
    this.program = program;
    this.gpa = gpa;
  }

  introduce() {
    return `${super.introduce()} I'm a ${this.program} student with GPA ${this.gpa}.`;
  }

  study(subject) {
    return `${this.name} is studying ${subject}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `${super.introduce()} I teach ${this.subject}.`;
  }

  teach() {
    return `${this.name} is teaching ${this.subject}.`;
  }
}

const alice = new Student('Alice', 20, 'Computer Science', 9.1);
const bob = new Teacher('Bob', 45, 'Mathematics');

console.log(alice.introduce());
console.log(bob.introduce());

console.log(alice instanceof Person);
console.log(alice instanceof Student);
console.log(bob instanceof Teacher);

const people = [alice, bob, new Person('Charlie', 30)];
people.forEach(p => console.log(p.introduce()));
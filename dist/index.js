"use strict";
//object orianterd programming
Object.defineProperty(exports, "__esModule", { value: true });
//class
class Student {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    showStudent() {
        console.log(`Student name: ${this.name}, age:${this.age},  email:${this.email}`);
    }
}
const student1 = new Student('animes', 23, 'animes@gamil.com');
const student2 = new Student('rony ', 20, 'animes101@gamil.com');
student1.showStudent();
student2.showStudent();

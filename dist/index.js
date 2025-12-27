"use strict";
// //object orianterd programming
Object.defineProperty(exports, "__esModule", { value: true });
// //class
// class Student{
//     // name:string;
//     // age:number;
//     // email:string;
//     //jparamete properties
//     constructor(public name:string,public age:number,public email:string){
//         // this.name=name;
//         // this.age=age;
//         // this.email=email
//     }
//     showStudent(){
//         console.log(`Student name: ${this.name}, age:${this.age},  email:${this.email}`)
//     }
// }
// const student1=new Student('animes', 23, 'animes@gamil.com');
// const student2=new Student('rony ', 20, 'animes101@gamil.com');
// student1.showStudent();
// student2.showStudent()
//opp --inheritence
class Student {
    name;
    age;
    email;
    address;
    constructor(name, age, email, address) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    showData() {
        console.log(`name:${this.name}, email:${this.email}, address:${this.address}, age:${this.age}`);
    }
}
const Student1 = new Student('animes barman', 20, 'animnes@gamil.com', 'thakurgaon');
const Student2 = new Student('jobon barman', 30, 'animnes102@gamil.com', 'ruhia');
class Teacher {
    name;
    age;
    email;
    address;
    designation;
    constructor(name, age, email, address, designation) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.designation = designation;
    }
    showData(numberOfshllep) {
        console.log(`name:${this.name}, email:${this.email}, address:${this.address}, age:${this.age}, sleep:${numberOfshllep}`);
    }
}
const teacher1 = new Teacher('animes barman', 20, 'animnes@gamil.com', 'thakurgaon', 'teacher');
const Teacher2 = new Teacher('jobon barman', 30, 'animnes102@gamil.com', 'ruhia', 'teacher');
teacher1.showData(20);

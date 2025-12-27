// //object orianterd programming

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


class Parent{

       name:string;
    age:number;
    email:string;
    address:string;


    constructor(name:string, age:number, email:string, address:string){
        this.name=name;
        this.age=age;
        this.email=email;
        this.address=address;
    }

    showData(sleepTime:number){
        console.log(`name:${this.name}, email:${this.email}, address:${this.address}, age:${this.age}, sleepTime:${sleepTime}`)
    }

}

class Student extends Parent{

    constructor(name:string, age:number, email:string, address:string){
        super(name,age ,email,address)
    }

   
 
}


const Student1=new Student('animes barman', 20, 'animnes@gamil.com', 'thakurgaon')
const Student2=new Student('jobon barman', 30, 'animnes102@gamil.com', 'ruhia')

class Teacher extends Parent{
   
    designation:string;


    constructor(name:string, age:number, email:string, address:string, designation:string){
        super(name, age, email, address,);
        this.designation=designation;
    }
   teacher(){

    console.log(`${this.designation}`)

   }

  
}


const teacher1=new Teacher('animes barman', 20, 'animnes@gamil.com', 'thakurgaon', 'teacher bangla')
const Teacher2=new Teacher('jobon barman', 30, 'animnes102@gamil.com', 'ruhia', 'teacher english')

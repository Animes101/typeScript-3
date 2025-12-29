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


// class Parent{

//        name:string;
//     age:number;
//     email:string;
//     address:string;


//     constructor(name:string, age:number, email:string, address:string){
//         this.name=name;
//         this.age=age;
//         this.email=email;
//         this.address=address;
//     }

//     showData(sleepTime:number){
//         console.log(`name:${this.name}, email:${this.email}, address:${this.address}, age:${this.age}, sleepTime:${sleepTime}`)
//     }

// }

// class Student extends Parent{

//     constructor(name:string, age:number, email:string, address:string){
//         super(name,age ,email,address)
//     }

   
 
// }


// const Student1=new Student('animes barman', 20, 'animnes@gamil.com', 'thakurgaon')
// const Student2=new Student('jobon barman', 30, 'animnes102@gamil.com', 'ruhia')

// class Teacher extends Parent{
   
//     designation:string;


//     constructor(name:string, age:number, email:string, address:string, designation:string){
//         super(name, age, email, address,);
//         this.designation=designation;
//     }
//    teacher(){

//     console.log(`${this.designation}`)

//    }

  
// }


// const teacher1=new Teacher('animes barman', 20, 'animnes@gamil.com', 'thakurgaon', 'teacher bangla')
// const Teacher2=new Teacher('jobon barman', 30, 'animnes102@gamil.com', 'ruhia', 'teacher english')



// teacher1.teacher()

// type gurds

// type Parems=string | number

// const add=(x:Parems , y:Parems)=>{

//     if(typeof x=== 'number' && typeof y==='number'){

//         console.log(x+y)
//     }else if(typeof x === 'string' && typeof y === 'string'){
//         console.log(`${x} ${y}`)
//     }

// }


// add('xxx', 'yy');
// add(20,30)


//in garud 

// type NormalUser={
//     name:string;
// }

// type AdminUser={
//     name:string;
//     role:'admin'
// }

// const getUser=(user:NormalUser | AdminUser)=>{


//     if('role' in user){
//         console.log('user Admin')
//     }

//     console.log('user')


// }

// const normalUser:NormalUser={
//     name:'animes'
// }

// const adminUser:AdminUser={
//     name:'admin user',
//     role:'admin'
// }

// getUser(adminUser)


//instanceof guard

// class Animal{
//     name:string;species:string;

//     constructor(name:string, species:string){
//         this.name=name;
//         this.species=species;

//     }

//     makeSound(){
//         console.log(`i a makin sound `)
//     }
// }



// class Dog extends Animal{
//     constructor(name:string,species:string){
//         super(name, species)
//     }
//     nakeBark(){
//         console.log('iam barking')
//     }

// }

// class Cat extends Animal{
//     constructor(name:string,species:string){
//         super(name, species)
//     }
//     nakeBark(){
//         console.log('iam  mao')
//     }

// }

// const getAnimal=(animal:Animal)=>{
//     if( animal instanceof Dog){
//         animal.nakeBark();
//     }else if(animal instanceof Cat){
//         animal.nakeBark()
//     }
// }


// const dog=new Dog('Bog bahi', 'dog')
// const cat=new Cat('cat bhai', 'cat')


// getAnimal(dog)    



//access modifiers

// class BankAcount{
//     readonly id:number;
//     name:string;
//     protected  _blance:number;


//     constructor(id:number, name:string, blance:number){

//         this.id=id;
//         this.name=name;
//         this._blance=blance;
//     }

//     addBlance(newBlance:number){
//         this._blance = this._blance +newBlance;
//         return(`blance:${this._blance}`)
//     }
// }


// class StudentAcount extends BankAcount{

//     constructor(id:number,name:string,_blance:number){
//         super(id,name,_blance)
        
//     }

// }

// const goribManus=new BankAcount(12540, 'animes barman', 52200);

// const myBlance=goribManus.addBlance(30000)

// console.log(myBlance)

//getter and setter


// class BankAcount{
//     readonly id:number;
//     name:string;
//     protected  _blance:number;


//     constructor(id:number, name:string, blance:number){

//         this.id=id;
//         this.name=name;
//         this._blance=blance;
//     }

//     addBlance(newBlance:number){
//         this._blance = this._blance +newBlance;
//         return(`blance:${this._blance}`)
//     }

//     set depositBlance(amount:number){
//          this._blance= this._blance + amount

//     }

//     get blance(){
//         return this._blance;
//     }

    
// }


// class StudentAcount extends BankAcount{

//     constructor(id:number,name:string,_blance:number){
//         super(id,name,_blance)
        
//     }

// }

// const goribManus=new BankAcount(12540, 'animes barman', 52200);

// const myBlance=goribManus.addBlance(30000)

// const myBlanceGetter=goribManus.blance;
// const depoitBlance=goribManus.depositBlance=20000;


// console.log(depoitBlance)




//statics in opp


// class Acunter{
//     static count:number=0;

//     static inCremnet(){
//         return Acunter.count=Acunter.count +1;
//     }

//     static decreMent(){
//         return Acunter.count =Acunter.count -1;
//     }
// }


// console.log(Acunter.decreMent())





//polymorphisom


class Person{

    getShleep(){
        console.log(`iam shleping`)
    }
}

class Student extends Person{

    getShleep(): void {
        console.log('sleeping for student')
    }
}

class Developer extends Person{
    getShleep(){

        console.log(`sleeping for developer`)
    }
}


const person=new Person()
const studentSleep=new Student();

const developer=new Developer()
















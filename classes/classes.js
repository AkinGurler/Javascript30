
/* constructor function */
/* function Person(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
   /*  this.fullName=fullName 
}*/


/* prototypedan gelen özellik her ikisi içinde çalışıyor */
/* Person.prototype.fullName=function (){
    return this.name+ " "+ this.surname;
} */
/* function fullName(){
    return this.name+ " "+ this.surname;
} */
/*  
const arin=new Person("Arin","asasd",5);
const elis=new Person("Elis","asasd",5);
/*  
console.log(arin);
console.log(elis); */


/* Nesneleri fonksiyonlarla oluşturduk bir takım problemler meyadana geldi */

/* function Person(name,surname,age){
    this.name=name;
    this.surname=surname;
    this.age=age;
} */

/* Class özel bir fonksiyondur javascriptte  */
class Person{
    /* Nesne oluşumunda otomatik olarak çalışan fonksiyon */
    constructor (name,surname,age){
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    fullName(){
        return this.name+ " "+ this.surname; 
    }
    /*Belli metodların sadece classa ait olmasını isteriz buna static özellik denir  */
    static showName="Person"
    static logStatic(){
        console.log("Static method çalışıyor");
    }
}

class Engineer extends Person {
    constructor(name,surname,age,salary){
        super(name,surname,age)/* get this from super class parnt class */
        this.salary=salary
    }
    getMoney(){
        console.log("para kazan")
    }
}

/* instance */
const arin=new Person("Arin","asasd",5);
const elis=new Person("Elis","asasd",5);
const akin=new Engineer("Akin","gürler",23,2000)
console.log(akin.fullName())
/* console.log(arin.showName) *//* it doesnt work static method only belong to class   */
/* console.log(Person.showName) */ /* it will work */



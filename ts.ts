//Primitives number, string, boolean
// More complex: arrays, objects
// Function types, parameters

//Primitives

let age: number;

age = 12;


let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex

let hobbies: string[];

hobbies = ['Sports','Cooking'];

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// }

let people: Person[];

// Type inference

let course: string | number = 'React -The complete guide';

course = 12341;

// Functions and types

function add(a: number,b: number){
    return a + b;
}

// function print(value: any){
//     console.log(value);
// }

// Generics

function insertAtBeginning<fdsa>(array: fdsa[], value: fdsa){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = insertAtBeginning(['a', 'b', 'c'],'a');

console.log(updatedArray);

//updatedArray[0].split('');

// Classes and interfaces

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor (
        public firstName: string, 
        public last: string, 
        public age: number, 
        public courses: string[]
        ){}

    enroll(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Max','Schwarz', 32, ['Angular']);
student.enroll('MEAN');
//student.listCourses();

//console.log(student);

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello');
    }
}

max.greet();

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}
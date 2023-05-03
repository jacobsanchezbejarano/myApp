//Primitives number, string, boolean
// More complex: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Primitives
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
//More complex
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// person = {
//     isEmployee: true
// }
var people;
// Type inference
var course = 'React -The complete guide';
course = 12341;
// Functions and types
function add(a, b) {
    return a + b;
}
// function print(value: any){
//     console.log(value);
// }
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'a');
console.log(updatedArray);
//updatedArray[0].split('');
// Classes and interfaces
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, last, age, courses) {
        this.firstName = firstName;
        this.last = last;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('MEAN');
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello');
    }
};
max.greet();

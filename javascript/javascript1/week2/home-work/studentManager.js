"use strict"


 // Student manager 


 const class07Students = [];
 function addStudentToClass(studentName) {
    
       if (studentName === "Queen" && class07Students.length >= 6) {
        class07Students.push(studentName);
      }
       if (class07Students.length >= 6) {
           
           return 'can\t add more students'
       }
        else if (class07Students.includes(studentName) ) {
           return studentName  + ' is already in class'
        }
        if (studentName === ' ') {
         return 'can\t add empty name'
       }
 
       class07Students.push(studentName);
 }
addStudentToClass(' ');
addStudentToClass('John');
addStudentToClass('ida');
addStudentToClass('John');
addStudentToClass('melvin');
addStudentToClass("man");
addStudentToClass("me");
addStudentToClass('Ben');
addStudentToClass('Queen');
addStudentToClass('Fred');
console.log(class07Students);
 
 
 function getNumberOfStudents(class07Students) {
     console.log(class07Students.length);
 };
 getNumberOfStudents(class07Students);

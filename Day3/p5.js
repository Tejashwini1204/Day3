term ="bosco";
console.log(term[2]);


// to find the length of the string
function findStringLength(str) {
    let count = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        count++;
    }
    return count;
}

const string = "tejashwini";
const length = findStringLength(string);
console.log("Length of the string:", length);


// to check the eligibility of the student
function checkEligibility(attendance, marks) {
    // Define the criteria
    const requiredAttendance = 75; // 75% attendance is required
    const passingMarks = 40; // Minimum passing marks in each subject
    
    // Check if the student meets both criteria
    if (attendance >= requiredAttendance) {
        let allSubjectsPassed = marks.every(mark => mark >= passingMarks);
        
        if (allSubjectsPassed) {
            console.log("The student is eligible for the semester exam.");
        } else {
            console.log("The student is not eligible for the semester exam due to low marks in one or more subjects.");
        }
    } else {
        console.log("The student is not eligible for the semester exam due to insufficient attendance.");
    }
}

// Example usage
let studentAttendance = 80; // Student's attendance in percentage
let studentMarks = [45, 50, 55, 60]; // Marks in 4 subjects

checkEligibility(studentAttendance, studentMarks);



// To check student merit list
function categorizeStudent(marks) {
    if (marks > 90) {
        return "A+";
    } else if (marks >= 80 && marks <= 90) {
        return "A";
    } else if (marks >= 60 && marks < 75) {
        return "B+";
    } else if (marks >= 50 && marks < 60) {
        return "B";
    } else if (marks >= 35 && marks < 50) {
        return "C+";
    } else {
        return "Below Average";
    }
}

// Example usage with multiple students
students = [
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 82 },
    { name: "Charlie", marks: 67 },
    { name: "David", marks: 45 },
    { name: "Eve", marks: 20 }
];

// Categorizing students
students.forEach(student => {
    category = categorizeStudent(student.marks);
    console.log(`${student.name} is categorized as: ${category}`);
});



// JavaScript program to take first 100 natural numbers
// If a number is a multiple of 2, multiply it by 5
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        // If the number is divisible by 2, multiply it by 5
        console.log(i * 5);
    } else if(i%3==0){
        // Otherwise, print the number itself
        console.log(i/3);
    } else{
        console.log(i);
    }
}


// JavaScript program to apply operations on the first 100 natural numbers
for (let i = 1; i <= 100; i++) {
    let result1 = i;
    
    // If the number is a multiple of 2, multiply it by 5
    if (result1 % 2 === 0) {
        result1 *= 5;
    }
}   
for (let i = 1; i <= 100; i++) {
    let result2 = i;
    
    // If the number is a multiple of 2, multiply it by 5
    if (result2 % 3 === 0) {
        result2 /= 3;
        console.log(result2);
    }
} 
if (result1==result2){
    console.log(i)
}  



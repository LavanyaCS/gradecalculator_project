

let english = Number(prompt("Enter English marks:"));
let tamil = Number(prompt("Enter Tamil marks:"));
let maths = Number(prompt("Enter Maths marks:"));
let science = Number(prompt("Enter Science marks:"));
let social = Number(prompt("Enter Social marks:"));

console.log("English Mark is " + english);
console.log("Tamil Mark is " + tamil);
console.log("Maths Mark is " + maths);
console.log("Science Mark is " + science);
console.log("Social Mark is " + social);

function isvalidMarks(mark) {
    return isNaN(mark) || mark < 0 || mark > 100;
}
if (isvalidMarks(english) || isvalidMarks(tamil) || isvalidMarks(maths) || isvalidMarks(science) || isvalidMarks(social)) {
    alert("Please enter valid marks between 0 and 100 for all subjects.");
}
else {

    let total = (english + tamil + maths + science + social);
    console.log("Total Marks is " + total);
    let average = total / 5;
    console.log("Average Score is " + average);
    function GradeCal(average) {

        if (average >= 90) {
            console.log("Your Grade is A+");
            return "A+";
        }
        else if (average >= 80 && average < 90) {
            console.log("Your Grade is A");
            return "A";

        }
        else if (average >= 70 && average < 80) {
            console.log("Your Grade is B");
            return "B";

        }
        else if (average >= 60 && average < 70) {
            console.log("Your Grade is C");
            return "C";

        }

        else if (average >= 50 && average < 60) {
            console.log("Your Grade is D");
            return "D";
        }
        else {
            console.log("Your Grade is F");
            return "F";
        }


    }
    let grade = GradeCal(average);
    alert(`Total: ${total}\nAverage: ${average}\nYour Grade is: ${grade}`);


}
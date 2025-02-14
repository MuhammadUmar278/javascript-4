// let arr = ["karachi" , "lahore", "islamabad"]
// [1] = "lahore"
// [3] = "karachi"
// console.log(arr)
// let nums = [3,7,12]
// console.log("max number is" + Math.max(...nums)) 

//chapter 14
//question 1
let studentNames = [];
//question 2
let studentNames = new Array();
//quetion 3
let stringsArray = ["apple", "banana", "cherry"];
//question 4
let numbersArray = [10, 20, 30, 40, 50];
//question 5
let booleanArray = [true, false, true, false];
//question 6
let mixedArray = ["Hello", 42, true, null, { key: "value" }];
//question 7
let educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
let ul = document.getElementById("qualificationsList");

educationQualifications.forEach(function (qualification) {
    let li = document.createElement("li");
    li.textContent = qualification;
    ul.appendChild(li);
});






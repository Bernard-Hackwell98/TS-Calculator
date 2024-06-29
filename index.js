import inquirer from "inquirer";
const Answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNum" },
    { message: "Enter Second Number", type: "number", name: "SecondNum" },
    { message: "Select one of the operator to perform an action",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        name: "Operator" }
]);
//console.log(Answer);
if (Answer.Operator === "Addition") {
    console.log(Answer.FirstNum + Answer.SecondNum);
}
else if (Answer.Operator === "Subtraction") {
    console.log(Answer.FirstNum - Answer.SecondNum);
}
else if (Answer.Operator === "Multiplication") {
    console.log(Answer.FirstNum * Answer.SecondNum);
}
else if (Answer.Operator === "Division") {
    console.log(Answer.FirstNum / Answer.SecondNum);
}
else {
    console.log("Invalid Operation");
}

import { add, subtract, multiply, divide } from "./math.js";
import { logSuccess, logError, logInfo } from "./greet.js";
import fs from "fs"; //built-in module
console.log("Registration Number: BD/2025/TC3/149");

try {
    let a = 20;
    let b = 10;
    logInfo(`Numbers: a = ${a}, b = ${b}`);


logSuccess(`Addtion: ${add(a, b)}`);
logSuccess(`Subtraction: ${subtract(a, b)}`);
logSuccess(`Multiplication: ${multiply(a, b)}`);
logSuccess(`Division: ${divide(a, b)}`);
} catch (error) {
logError(error.message);
}

fs.writeFileSync("result.txt", "Calculator operation completed successfully");
logInfo("Result has been saved to result.txt");






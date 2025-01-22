const StringCalculator = require("./stringCalculatorTDD");
const calculator = new StringCalculator();

try {
  console.log(calculator.add(""));
  console.log(calculator.add("1"));
  console.log(calculator.add("2,4"));
  console.log(calculator.add("1\n2,3"));
  console.log(calculator.add("//;\n1;2"));
  console.log(calculator.add("1,-1,3,-5"));
} catch (error) {
  console.error(error.message);
}

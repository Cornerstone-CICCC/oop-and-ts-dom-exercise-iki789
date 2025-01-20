class Calculator {
  constructor(input1, input2, operator) {
    this.input1Ref = input1;
    this.input2Ref = input2;
    this.operator = operator;
  }

  add() {
    return +this.input1Ref.value + +this.input2Ref.value;
  }
  subtract() {
    return +this.input1Ref.value - +this.input2Ref.value;
  }
  multiply() {
    return +this.input1Ref.value * +this.input2Ref.value;
  }
  divide() {
    return Math.round(+this.input1Ref.value / +this.input2Ref.value, 2);
  }
  compute() {
    // compute and append to dom
    let result = 0;
    if (this.operator.value === "add") {
      result = this.add();
    } else if (this.operator.value === "subtract") {
      result = this.subtract();
    } else if (this.operator.value === "divide") {
      result = this.divide();
    } else if (this.operator.value === "multiply") {
      result = this.multiply();
    }

    return result;
  }
}
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const operator = document.querySelector("#operation");
const calculator = new Calculator(input1, input2, operator);

document.querySelector("#calculateBtn").addEventListener("click", function () {
  const result = calculator.compute();
  document.querySelector("#result").innerHTML = result;
});

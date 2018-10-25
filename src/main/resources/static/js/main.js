"use strict"

function setCalculatorAction(chosenAction) {
    let calculatorActions = document.getElementById("calculator-action");
    console.log(calculatorActions);
    if (calculatorActions.getAttribute("value") !== "null") {
        calculatorActions.setAttribute("value", "null");
    } else {
        calculatorActions.setAttribute("value",
            getActionName(
                chosenAction.getAttribute("value")
            )
        );
    }
    changeColor(chosenAction);
}


function getActionName(actionSign) {
    if (actionSign === "+") {
        return "addition";
    } else if (actionSign === "-") {
        return "subtraction";
    } else {
        return "null";
    }
}


function changeColor(button) {
    let classNames = "calculator-action border-style font-style margin";
    if (button.getAttribute("class").includes("red")) {
        button.setAttribute("class", classNames.replace("-red", ""));
    } else {
        button.setAttribute("class", classNames.replace("border-style", "border-style-red"));
    }
}


function alertResult(calculator) {
    if (isAction(calculator.action)) {
        alert(mathExpression(calculator));
    }
}


function isAction(action) {
    return action | !action.includes('null');
}


function mathExpression(data) {

    let secondNumber = data.secondNumber > 0 ?
        data.secondNumber: "(" + data.secondNumber + ")";

    let result = data.result > 0 ? data.result: "" + data.result + "";

    return data.firstNumber + " " + data.action + " " + secondNumber +  " = " + result;
}
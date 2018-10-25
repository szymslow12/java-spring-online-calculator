"use strict"

function setCalculatorAction(chosenAction) {
    let chosenCalculatorAction = document.getElementById("chosen-calculator-action");
    reversePreviousChoice(chosenCalculatorAction);

    let value = chosenCalculatorAction.getAttribute("value");
    let actionName = getActionName(chosenAction.getAttribute("value"));

    if (value !== "null" & value !== "") {
        chosenCalculatorAction.setAttribute("value", "null");
    } else {
        chosenCalculatorAction.setAttribute("value", actionName);
    }
    changeColor(chosenAction);
}

function reversePreviousChoice(chosenCalculatorAction) {
    let calculatorActions = document.getElementsByClassName("calculator-action");
    chosenCalculatorAction.setAttribute("value", "null");
    for (let i = 0; i < calculatorActions.length; i++) {
        let calculatorAction = calculatorActions[i];
        let className = calculatorAction.getAttribute("class");
        if (className.includes("red")) {
            calculatorAction.setAttribute("class", className.replace("-red", ""));
        }
    }
    chosenCalculatorAction.setAttribute("value", "null");
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
    console.log(calculator);
    if (isAction(calculator.action)) {
        alert(mathExpression(calculator));
    }
}


function isAction(action) {
    console.log(action);
    if (action) {
        return !action.includes('null');
    }
    //return action & !action.includes('null');
    return false;
}


function mathExpression(data) {

    let secondNumber = data.secondNumber > 0 ?
        data.secondNumber: "(" + data.secondNumber + ")";

    let result = data.result > 0 ? data.result: "" + data.result + "";

    return data.firstNumber + " " + data.action + " " + secondNumber +  " = " + result;
}
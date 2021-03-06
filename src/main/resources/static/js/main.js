"use strict"

function setCalculatorAction(chosenAction) {
    let chosenCalculatorAction = document.getElementById("chosen-calculator-action");
    reversePreviousActionChoice(chosenCalculatorAction);

    let value = chosenCalculatorAction.getAttribute("value");
    let actionName = getActionName(chosenAction.getAttribute("value"));

    if (value !== "null" & value !== "") {
        chosenCalculatorAction.setAttribute("value", "null");
    } else {
        chosenCalculatorAction.setAttribute("value", actionName);
    }
    changeColor(chosenAction);
}

function reversePreviousActionChoice(chosenCalculatorAction) {
    let calculatorActions = document.getElementsByClassName("basic-action");
    chosenCalculatorAction.setAttribute("value", "null");
    for (let i = 0; i < calculatorActions.length; i++) {
        let calculatorAction = calculatorActions[i];
        let className = calculatorAction.getAttribute("class");
        if (className.includes("clicked")) {
            calculatorAction.setAttribute("class", className.replace("-clicked", ""));
        }
    }
}


function getActionName(actionSign) {
    if (actionSign === "+") {
        return "addition";
    } else if (actionSign === "-") {
        return "subtraction";
    } else if (actionSign === "*") {
        return "multiplication";
    } else if (actionSign === "\\\\") {
        return "division";
    } else {
        return "null";
    }
}


function changeColor(button) {
    let classNames = "basic-action border-style font-style action-margin";
    if (button.getAttribute("class").includes("clicked")) {
        button.setAttribute("class", classNames.replace("-clicked", ""));
    } else {
        button.setAttribute("class", classNames.replace("border-style", "border-style-clicked"));
    }
}


function getResult(calculator) {
    let resultContainer = document.getElementsByClassName("result")[0];
    if (isAction(calculator.action)) {
        resultContainer.firstChild.textContent = mathExpression(calculator);
        addBreakLines(resultContainer);
        resetAll();
    } else {
        resultContainer.firstChild.textContent = "Numbers are not submitted!";
    }
}


function isAction(action) {
    if (action) {
        return !action.includes('null');
    }
    return false;
}

function addBreakLines(resultContainer) {
    let resultContainerHtml = resultContainer.innerHTML;
    while (resultContainerHtml.includes("\n")) {
        resultContainer.innerHTML = resultContainerHtml.replace("\n", "<br/>");
        resultContainerHtml = resultContainer.innerHTML;
    }
}


function mathExpression(data) {

    let secondNumber = data.secondNumber > 0 ?
        data.secondNumber: "(" + data.secondNumber + ")";

    let result = data.result > 0 ? data.result: "" + data.result + "";

    return data.firstNumber + " " + data.action + " " + secondNumber +  " = " + result;
}


function setActionSigns() {
    let basicActions = document.getElementsByClassName("basic-action");
    for (let i = 0; i < basicActions.length; i++) {
        let basicAction = basicActions[i];
        let paragraph = document.createElement("p1");
        paragraph.innerHTML = "<p1>" + getSign(basicAction.firstChild.textContent) + "</p1>";
        basicAction.firstChild.textContent = "";
        basicAction.appendChild(paragraph);
    }
}


function getSign(actionSign) {
    console.log(actionSign);
    if (actionSign === "+") {
        return "&#10133;";
    } else if (actionSign === "-") {
        return "&#10134;";
    } else if (actionSign === "*") {
        return "&#10006;";
    } else if (actionSign === "\\\\") {
        return "&#10135;";
    } else {
        return "none";
    }
}


function resetAll() {
    let numbersFields = document.getElementsByClassName("number");
    for (let i = 0; i < numbersFields.length; i++) {
        let numberField = numbersFields[i];
        console.log(numberField.childNodes[1]);
        numberField.childNodes[1].setAttribute("value", "0");
    }
    reversePreviousActionChoice(document.getElementById("chosen-calculator-action"));

}
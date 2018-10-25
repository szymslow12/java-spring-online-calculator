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


function alertResult(action, result, numbers) {
    /*console.log(action);
    if (action | !action.includes('null')) {
        alert(numbers[0] + " " + action + " " + numbers[1] +  " = " + result);
    }*/
    console.log(action);
}
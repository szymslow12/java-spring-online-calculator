package com.codecool.onlineCalculator.models;

public class Calculator {

    private double firstNumber;
    private double secondNumber;
    private String[] actions = new String[] {"+", "-", "*", "\\\\"};
    private Action action;
    private double result;


    public void setFirstNumber(double firstNumber) {
        this.firstNumber = firstNumber;
    }


    public double getFirstNumber() {
        return firstNumber;
    }


    public void setSecondNumber(double secondNumber) {
        this.secondNumber = secondNumber;
    }


    public double getSecondNumber() {
        return secondNumber;
    }


    public void setAction(String action) {
        this.action = new ActionFactory().calculateByAction(action);
    }


    public String getAction() {
        return action != null ? action.toString(): "null";
    }


    public double result() {
        result = action != null ? action.result(firstNumber, secondNumber): 0.0;
        return result;
    }


    public double getResult() {
        return result();
    }

    /*public String getActions() {
        StringBuilder jsonArray = new StringBuilder("[");
        for (int i = 0; i < actions.length; i++) {
            jsonArray.append(String.format("\"%s\",", actions[i]));
//            jsonArray.append(String.format("\"%s\"=\"%s\",", "number" + i, actions[i]));
        }
        jsonArray.deleteCharAt(jsonArray.lastIndexOf(","));
        jsonArray.append("]");
        return jsonArray.toString();
    }*/
    public String[] getActions() {
        return this.actions;
    }


    public void setActions(String[] actions) {
        this.actions = actions;
    }
}

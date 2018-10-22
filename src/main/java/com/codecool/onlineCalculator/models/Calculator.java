package com.codecool.onlineCalculator.models;

public class Calculator {

    private long firstNumber;
    private long secondNumber;
    private String action;


    public void setFirstNumber(long firstNumber) {
        this.firstNumber = firstNumber;
    }


    public long getFirstNumber() {
        return firstNumber;
    }


    public void setSecondNumber(long secondNumber) {
        this.secondNumber = secondNumber;
    }


    public long getSecondNumber() {
        return secondNumber;
    }


    public void setAction(String action) {
        this.action = action;
    }


    public String getAction() {
        return action;
    }
}

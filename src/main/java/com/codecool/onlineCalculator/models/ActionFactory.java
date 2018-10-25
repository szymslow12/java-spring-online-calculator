package com.codecool.onlineCalculator.models;

public class ActionFactory {

    public Action calculateByAction(String name) {
        switch (name) {
            case "addition":
                return new Addition();
            case "subtraction":
                return new Subtraction();
            case "multiplication":
                return new Multiplication();
            case "division":
                return new Division();
            default:
                throw new IllegalArgumentException("Bad action!");
        }
    }
}

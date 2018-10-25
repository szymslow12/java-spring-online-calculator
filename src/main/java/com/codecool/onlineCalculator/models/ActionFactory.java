package com.codecool.onlineCalculator.models;

public class ActionFactory {

    public Action calculateByAction(String name) {
        switch (name) {
            case "addition":
                return new Addition();
            default:
                throw new IllegalArgumentException("Bad action!");
        }
    }
}

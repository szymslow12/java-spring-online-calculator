package com.codecool.onlineCalculator.models.actions;

public class Multiplication implements Action {

    @Override
    public double result(double a, double b) {
        return a * b;
    }

    @Override
    public String toString() {
        return "*";
    }
}

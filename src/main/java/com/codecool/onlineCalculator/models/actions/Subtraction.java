package com.codecool.onlineCalculator.models.actions;

import com.codecool.onlineCalculator.models.actions.Action;

public class Subtraction implements Action {

    @Override
    public double result(double a, double b) {
        return a - b;
    }


    @Override
    public String toString() {
        return "-";
    }
}

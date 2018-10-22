package com.codecool.onlineCalculator.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalculatorController {

    @GetMapping("/index")
    public String onlineCalculator() {
        return "index";
    }
}

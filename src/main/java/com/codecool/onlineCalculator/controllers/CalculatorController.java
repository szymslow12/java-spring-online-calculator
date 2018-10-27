package com.codecool.onlineCalculator.controllers;

import com.codecool.onlineCalculator.models.Calculator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class CalculatorController {

    @GetMapping("/index")
    public String onlineCalculator(Model model) {
        model.addAttribute("calculator", new Calculator());
        return "index";
    }


    @PostMapping("/index")
    public String collectConfiguration(@ModelAttribute Calculator calculator) {
        return "index";
    }
}

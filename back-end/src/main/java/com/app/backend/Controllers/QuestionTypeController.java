package com.app.backend.Controllers;

import com.app.backend.Entities.QuestionType;
import com.app.backend.Services.QuestionTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/questionTypes")
public class QuestionTypeController {
    private QuestionTypeService questionTypeService;

    @Autowired
    public QuestionTypeController(QuestionTypeService questionTypeService) {
        this.questionTypeService = questionTypeService;
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<QuestionType> getAllQuestions() {
        return questionTypeService.findAll();
    }
}

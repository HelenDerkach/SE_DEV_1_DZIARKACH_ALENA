package com.app.fapi.Controllers;

import com.app.fapi.Entities.Question;
import com.app.fapi.Entities.QuestionType;
import com.app.fapi.Services.QuestionTypeService;
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
    public @ResponseBody QuestionType[] getAllQuestions() {
        return questionTypeService.getAll();
    }
}

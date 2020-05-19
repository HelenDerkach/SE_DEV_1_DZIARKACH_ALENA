package com.app.backend.Controllers;

import com.app.backend.Entities.Question;
import com.app.backend.Services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/questions")
public class QuestionController {
    private QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping(path = "/new")
    public @ResponseBody
    Iterable<Question> createPoll(@RequestBody Iterable<Question> questions){
        return questionService.save(questions);
    }
}

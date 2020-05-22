package com.app.fapi.Controllers;

import com.app.fapi.Entities.Poll;
import com.app.fapi.Entities.Question;
import com.app.fapi.Services.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/api/questions")
public class QuestionController {
    private QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping(path = "/new")
    public @ResponseBody Question[] createQuestions(@RequestBody Question[] questions){
        return questionService.save(questions);
    }


}

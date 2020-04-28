package com.app.backend.Controllers;

import com.app.backend.Entities.Question;
import com.app.backend.Repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/questions")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
}

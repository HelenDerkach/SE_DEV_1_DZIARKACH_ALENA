package com.app.backend.Services;

import com.app.backend.Entities.Question;
import com.app.backend.Repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Iterable<Question> save(Iterable<Question> questions) {
        return questionRepository.saveAll(questions);
    }
}

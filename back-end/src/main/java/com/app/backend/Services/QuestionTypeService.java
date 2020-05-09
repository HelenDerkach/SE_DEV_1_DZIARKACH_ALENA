package com.app.backend.Services;

import com.app.backend.Entities.QuestionType;
import com.app.backend.Repositories.QuestionTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionTypeService {
    private QuestionTypeRepository questionTypeRepository;

    @Autowired
    public QuestionTypeService(QuestionTypeRepository questionTypeRepository) {
        this.questionTypeRepository = questionTypeRepository;
    }

    public Iterable<QuestionType> findAll(){
        return this.questionTypeRepository.findAll();
    }
}

package com.app.fapi.Services;

import com.app.fapi.Entities.Poll;
import com.app.fapi.Entities.Question;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class QuestionService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public QuestionService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public Question[] save(Question[] questions){
        try{
            return this.restTemplate.postForObject(backendUrl + "/questions/new", questions, Question[].class);
        }
        catch(Exception ex){
            throw ex;
        }
    }
}

package com.app.fapi.Services;

import com.app.fapi.Entities.QuestionType;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class QuestionTypeService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public QuestionTypeService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public QuestionType[] getAll(){
        return this.restTemplate.getForObject(backendUrl + "/questionTypes/all", QuestionType[].class);
    }
}

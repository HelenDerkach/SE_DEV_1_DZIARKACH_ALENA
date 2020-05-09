package com.app.fapi.Services;

import com.app.fapi.Entities.Poll;
import com.app.fapi.Entities.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PollService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public PollService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public Poll[] getUserPolls(Integer id){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls/all/{id}", Poll[].class, id);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Poll getPollById(Integer id){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls/{id}", Poll.class, id);
        }
        catch(Exception ex){
            throw ex;
        }
    }
}

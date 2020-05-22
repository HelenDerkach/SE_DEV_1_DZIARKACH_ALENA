package com.app.fapi.Services;

import com.app.fapi.Entities.PollResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PollResponseService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public PollResponseService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public PollResponse newPollResponse(PollResponse pollResponse){
        try{
            return this.restTemplate.postForObject(backendUrl + "/pollResponses/new", pollResponse, PollResponse.class);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Integer getPollResponseCount(Integer id){
        try{
            return this.restTemplate.getForObject(backendUrl + "/pollResponses/{id}/count", Integer.class, id);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Double getPollResponseAverageTime(Integer id){
        try{
            return this.restTemplate.getForObject(backendUrl + "/pollResponses/{id}/averageTime", Double.class, id);
        }
        catch(Exception ex){
            throw ex;
        }
    }
}

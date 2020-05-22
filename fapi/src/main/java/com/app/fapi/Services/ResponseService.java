package com.app.fapi.Services;

import com.app.fapi.Entities.ChartDataResponse;
import com.app.fapi.Entities.PagingResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ResponseService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public ResponseService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public ChartDataResponse[] getPieDataByQuestionId(Integer id){
        try{
            return this.restTemplate.getForObject(backendUrl + "/responses/data/chart/{id}", ChartDataResponse[].class, id);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public PagingResponse getTextQuestionDataByQuestionId(Integer id, Integer pageNumber){
        try{
            return this.restTemplate.getForObject(backendUrl + "/responses/data/text/{id}/{pageNumber}", PagingResponse.class, id, pageNumber);
        }
        catch(Exception ex){
            throw ex;
        }
    }
}

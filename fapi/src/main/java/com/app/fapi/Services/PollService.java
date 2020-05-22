package com.app.fapi.Services;

import com.app.fapi.Entities.Poll;
import com.app.fapi.Entities.PagingResponse;
import com.app.fapi.Entities.Question;
import com.app.fapi.Entities.Theme;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

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

    public PagingResponse getPublishedPagesByUserId(Integer id, Integer pageNumber){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls/published/userId={id}/pageNumber={pageNumber}", PagingResponse.class, id, pageNumber);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public PagingResponse getAllPublishedPages(Integer pageNumber){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls/published/pageNumber={pageNumber}", PagingResponse.class, pageNumber);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public PagingResponse getDraftsPagesByUserId(Integer id, Integer pageNumber){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls/drafts/userId={id}/pageNumber={pageNumber}", PagingResponse.class, id, pageNumber);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Integer getUserPollsCount(Integer id){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls/all/{id}/count", Integer.class,id);
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

    public Poll getPollByUrl(String url){
        try{
            return this.restTemplate.getForObject(backendUrl + "/polls?url={url}", Poll.class, url);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Poll save(Poll poll){
        try{
            if(poll.getIsPublished()){
                poll.setUrl(java.util.UUID.randomUUID().toString());
            }
            return this.restTemplate.postForObject(backendUrl + "/polls/new", poll, Poll.class);
        }
        catch(Exception ex){
            throw ex;
        }
    }
}

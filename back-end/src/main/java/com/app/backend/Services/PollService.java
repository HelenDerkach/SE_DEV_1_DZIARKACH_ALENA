package com.app.backend.Services;

import com.app.backend.Entities.*;
import com.app.backend.Repositories.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {
    private PollRepository pollRepository;
    private UserService userService;
    private QuestionService questionService;

    @Autowired
    public PollService(PollRepository pollRepository, UserService userService, QuestionService questionService) {
        this.pollRepository = pollRepository;
        this.questionService = questionService;
    }

    public Iterable<Poll> getAllPolls(){
        return pollRepository.findAll();
    }

    public Iterable<Poll> getPollsByUserId(Integer id){
        return pollRepository.findPollsByUserId(id);
    }

    public Optional<Poll> getPollById(Integer id){
        return pollRepository.findById(id);
    }

    public Optional<Poll> getPollByUrl(String url){
        return pollRepository.findPollByUrl(url);
    }

    public Poll save(Poll poll){
        if(poll.getId() != null){
            if(pollRepository.findById(poll.getId()).isPresent()){
                pollRepository.delete(poll);
            }
        }

        return pollRepository.save(poll);
    }

    public PagingResponse findPublishedPagesByUserId(Integer id, Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
        Page<Poll> resultPage = pollRepository.findAllByUserIdAndIsPublished(id, true, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }

    public PagingResponse findAllPublishedPages(Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
        Page<Poll> resultPage = pollRepository.findAllByIsPublished(true, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }

    public PagingResponse findDraftsPagesByUserId(Integer id, Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
        Page<Poll> resultPage = pollRepository.findAllByUserIdAndIsPublished(id, false, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }
}

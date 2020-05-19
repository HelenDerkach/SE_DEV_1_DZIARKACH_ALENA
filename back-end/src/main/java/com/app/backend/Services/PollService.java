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
//        if(!poll.getQuestions().isEmpty()){
//            poll.getQuestions().forEach(q -> {
//                q.setPollId(poll.getId());
//                q.getQuestionChoices().forEach(qc -> qc.setQuestionId(q.getId()));
//            });
//        }
//
//        if(!poll.getThemes().isEmpty()){
//            poll.getThemes().forEach(t -> t.setPollId(poll.getId()));
//        }
//        questionService.save(poll.getQuestions());
        Poll savedpoll = pollRepository.save(poll);
        return savedpoll;
    }

    public PagingResponse findPublishedPagesByUserId(Integer id, Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
//        User user = userService.getUserById(id).orElseThrow(() -> new RuntimeException("No user with this id " + id));
        Page<Poll> resultPage = pollRepository.findAllByUserIdAndIsPublished(id, true, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }

    public PagingResponse findDraftsPagesByUserId(Integer id, Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
//        User user = userService.getUserById(id).orElseThrow(() -> new RuntimeException("No user with this id " + id));
        Page<Poll> resultPage = pollRepository.findAllByUserIdAndIsPublished(id, false, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }
}

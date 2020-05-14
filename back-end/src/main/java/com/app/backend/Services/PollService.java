package com.app.backend.Services;

import com.app.backend.Entities.PagingResponse;
import com.app.backend.Entities.Poll;
import com.app.backend.Entities.User;
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

    @Autowired
    public PollService(PollRepository pollRepository, UserService userService) {
        this.pollRepository = pollRepository;
        this.userService = userService;
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
        return pollRepository.save(poll);
    }

    public PagingResponse findPublishedPagesByUserId(Integer id, Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
        User user = userService.getUserById(id).orElseThrow(() -> new RuntimeException("No user with this id " + id));
        Page<Poll> resultPage = pollRepository.findAllByUserAndIs_published(user, true, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }

    public PagingResponse findDraftsPagesByUserId(Integer id, Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
        User user = userService.getUserById(id).orElseThrow(() -> new RuntimeException("No user with this id " + id));
        Page<Poll> resultPage = pollRepository.findAllByUserAndIs_published(user, false, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }
}

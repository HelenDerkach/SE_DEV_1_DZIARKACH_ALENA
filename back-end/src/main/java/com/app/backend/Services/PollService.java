package com.app.backend.Services;

import com.app.backend.Entities.Poll;
import com.app.backend.Repositories.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PollService {
    private PollRepository pollRepository;

    @Autowired
    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Iterable<Poll> getPollsByUserId(Integer id){
        return pollRepository.findPollsByUserId(id);
    }

    public Optional<Poll> getPollById(Integer id){
        return pollRepository.findById(id);
    }

    public Poll save(Poll poll){
        return pollRepository.save(poll);
    }

//    public List<Poll> findPublishedPagesByUserId(Integer id, Integer pageNumber){
//        Pageable page = PageRequest.of(pageNumber, 3);
//        // Pageable secondPageWithThreeElements = PageRequest.of(1, 3);
//
//        return pollRepository.findAllByUserIdAndIs_published(id, page, true);
//    }
}

package com.app.backend.Services;

import com.app.backend.Entities.Poll;
import com.app.backend.Repositories.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PollService {
    private PollRepository pollRepository;

    @Autowired
    public PollService(PollRepository pollRepository) {
        this.pollRepository = pollRepository;
    }

    public Iterable<Poll> getPollsByUserId(Integer id){
        return this.pollRepository.findPollsByUserId(id);
    }

    public Optional<Poll> getPollById(Integer id){
        return pollRepository.findById(id);
    }
}

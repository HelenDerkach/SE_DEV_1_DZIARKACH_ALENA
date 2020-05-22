package com.app.backend.Services;

import com.app.backend.Entities.PollResponse;
import com.app.backend.Repositories.PollResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Service
public class PollResponseService {
    private PollResponseRepository pollResponseRepository;

    @Autowired
    public PollResponseService(PollResponseRepository pollResponseRepository){
        this.pollResponseRepository = pollResponseRepository;
    }

    public Iterable<PollResponse> findAll(){
        return pollResponseRepository.findAll();
    }

    public PollResponse save(PollResponse pollResponse){
        return pollResponseRepository.save(pollResponse);
    }

    public Integer getPollResponseCount(Integer id){
        return pollResponseRepository.countAllByPollId(id);
    }

    public Double getPollResponseAverageTime(Integer id){
        Iterable<PollResponse> pollResponses = findAll();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        Double averageTime = 0.0;
        int counter = 0;
        for(PollResponse pollResponse: pollResponses){
            LocalDateTime startedTime = LocalDateTime.parse(pollResponse.getStartedAt(), formatter);
            LocalDateTime completedTime = LocalDateTime.parse(pollResponse.getCompletedAt(), formatter);
            Duration duration = Duration.between(startedTime, completedTime);
            averageTime += Math.floor(duration.toMinutes());
            counter++;
        }
        return averageTime / counter;
    }
}

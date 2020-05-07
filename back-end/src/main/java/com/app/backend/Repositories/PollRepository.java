package com.app.backend.Repositories;

import com.app.backend.Entities.Question;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.app.backend.Entities.Poll;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PollRepository extends PagingAndSortingRepository<Poll,Integer> {
//    public Poll createPoll(Poll poll){
//
//    }
}

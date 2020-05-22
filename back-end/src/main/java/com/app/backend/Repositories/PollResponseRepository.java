package com.app.backend.Repositories;

import com.app.backend.Entities.PollResponse;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PollResponseRepository extends PagingAndSortingRepository<PollResponse,Integer> {
    Integer countAllByPollId(Integer PollId);


}

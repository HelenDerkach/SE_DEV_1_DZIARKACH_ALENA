package com.app.backend.Repositories;

import com.app.backend.Entities.Question;
import com.app.backend.Entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.app.backend.Entities.Poll;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PollRepository extends PagingAndSortingRepository<Poll,Integer> {
    @Query(value = "select * from polls where user_id = :userId ", nativeQuery = true)
    Iterable<Poll> findPollsByUserId(@Param("userId") Integer userId);

    // List<Poll> findAllByUserAndIs_published(Integer UserId, Pageable pageable, boolean Is_published);
}

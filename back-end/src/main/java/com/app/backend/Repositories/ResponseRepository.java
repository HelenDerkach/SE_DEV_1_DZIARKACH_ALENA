package com.app.backend.Repositories;

import com.app.backend.Entities.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface ResponseRepository extends PagingAndSortingRepository<Response,Integer> {
    Page<Response> findAllByQuestionId(Integer questionId, Pageable pageable);

    @Query(value = "select answer, count(*) from responses where question_id = :questionId group by answer", nativeQuery = true)
    Object[][] getResponsesWithCount(@Param("questionId") Integer questionId);
}

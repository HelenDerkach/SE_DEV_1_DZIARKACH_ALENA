package com.app.backend.Repositories;

import com.app.backend.Entities.Question;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionRepository extends PagingAndSortingRepository<Question,Integer> {
}

package com.app.backend.Repositories;

import com.app.backend.Entities.QuestionType;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionTypeRepository extends PagingAndSortingRepository<QuestionType,Integer> {
}

package com.app.backend.Repositories;

import com.app.backend.Entities.Response;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ResponseRepository extends PagingAndSortingRepository<Response,Integer> {
}

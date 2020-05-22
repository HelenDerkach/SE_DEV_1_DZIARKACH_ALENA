package com.app.backend.Repositories;

import com.app.backend.Entities.Theme;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ThemeRepository extends PagingAndSortingRepository<Theme,Integer> {
    public Page<Theme> findAllByIsPrivate(Boolean isPrivate, Pageable page);
}

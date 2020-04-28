package com.app.backend.Repositories;

import com.app.backend.Entities.Theme;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ThemeRepository extends PagingAndSortingRepository<Theme,Integer> {
}

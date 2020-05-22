package com.app.backend.Services;

import com.app.backend.Entities.PagingResponse;
import com.app.backend.Entities.Theme;
import com.app.backend.Repositories.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ThemeService {
    private ThemeRepository themeRepository;

    @Autowired
    public ThemeService(ThemeRepository themeRepository){
        this.themeRepository = themeRepository;
    }

    public Iterable<Theme> findAll() {
        return themeRepository.findAll();
    }

    public Theme save(Theme theme){
        return themeRepository.save(theme);
    }

    public PagingResponse findAllPublicThemesPages(Integer pageNumber){
        Pageable page = PageRequest.of(pageNumber, 3);
        Page<Theme> resultPage = themeRepository.findAllByIsPrivate(false, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }
}

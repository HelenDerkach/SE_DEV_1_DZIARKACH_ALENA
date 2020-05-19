package com.app.backend.Services;

import com.app.backend.Entities.Theme;
import com.app.backend.Repositories.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
}

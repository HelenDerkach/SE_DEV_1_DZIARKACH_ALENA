package com.app.backend.Controllers;

import com.app.backend.Entities.Theme;
import com.app.backend.Repositories.ThemeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/themes")
public class ThemeController {
    @Autowired
    private ThemeRepository themeRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Theme> getAllThemes(){
        return themeRepository.findAll();
    }
}

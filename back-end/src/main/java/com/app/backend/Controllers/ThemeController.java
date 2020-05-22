package com.app.backend.Controllers;

import com.app.backend.Entities.PagingResponse;
import com.app.backend.Entities.Theme;
import com.app.backend.Services.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/themes")
public class ThemeController {
    private ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService){
        this.themeService = themeService;
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Theme> getAllThemes(){
        return themeService.findAll();
    }

    @GetMapping(path = "/public/pageNumber={pageNumber}")
    public @ResponseBody PagingResponse findAllPublicThemesPages(@PathVariable String pageNumber) {
        return themeService.findAllPublicThemesPages(Integer.parseInt(pageNumber));
    }

    @PostMapping(path="/new")
    public @ResponseBody Theme newTheme(@RequestBody Theme theme){
        return themeService.save(theme);
    }
}

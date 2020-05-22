package com.app.fapi.Controllers;

import com.app.fapi.Entities.PagingResponse;
import com.app.fapi.Entities.Theme;
import com.app.fapi.Services.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/themes")
public class ThemeController {
    private ThemeService themeService;

    @Autowired
    public ThemeController(ThemeService themeService) {
        this.themeService = themeService;
    }

    @GetMapping(path="/public/pageNumber={pageNumber}")
    public @ResponseBody PagingResponse getAllPublicThemes(@PathVariable(name="pageNumber") String pageNumber){
        return themeService.findAllPublicThemesPages(Integer.parseInt(pageNumber));
    }

    @PostMapping(path="/new")
    public @ResponseBody Theme newTheme(@RequestBody Theme theme){
        return themeService.newTheme(theme);
    }
}

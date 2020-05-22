package com.app.fapi.Services;

import com.app.fapi.Entities.PagingResponse;
import com.app.fapi.Entities.Theme;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ThemeService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public ThemeService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public PagingResponse findAllPublicThemesPages(Integer pageNumber) {
        try{
            return this.restTemplate.getForObject(backendUrl + "/themes/public/pageNumber={pageNumber}", PagingResponse.class, pageNumber);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Theme newTheme(Theme theme) {
        try{
            return this.restTemplate.postForObject(backendUrl + "/themes/new", theme, Theme.class);
        }
        catch(Exception ex){
            throw ex;
        }
    }
}

package com.app.fapi.Entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import java.util.List;

@Data
public class Poll {
    private Integer id;

    private String title;
    private String description;
    private String url;

    private String starts_at;
    private String ends_at;

    private Boolean is_published;

    private User user;
    private List<Question> questions;
    private List<Theme> themes;
}

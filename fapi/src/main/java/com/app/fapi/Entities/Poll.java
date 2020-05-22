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

    private String startsAt;
    private String endsAt;

    private Boolean isPublished;

    private Integer userId;

    private List<Question> questions;
    private List<Theme> themes;
}

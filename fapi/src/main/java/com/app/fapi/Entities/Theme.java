package com.app.fapi.Entities;

import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
public class Theme {
    private Integer id;
    private String title;
    private boolean is_private;

    private List<Question> questions;
    @ToString.Exclude
    private Poll poll;
}

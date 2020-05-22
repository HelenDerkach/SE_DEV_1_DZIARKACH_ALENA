package com.app.fapi.Entities;

import lombok.Data;
import lombok.ToString;

import java.util.List;

@Data
public class Theme {
    private Integer id;
    private String title;
    private boolean isPrivate;

    private List<Question> questions;
}

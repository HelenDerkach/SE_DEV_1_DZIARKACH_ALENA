package com.app.fapi.Entities;

import lombok.Data;

@Data
public class Question {
    private Integer id;

    private String text;
    private Boolean is_required;
    private Integer position;

    private QuestionType type;

    private Poll poll;

    private Theme theme;
}

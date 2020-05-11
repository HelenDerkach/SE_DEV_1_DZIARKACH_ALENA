package com.app.fapi.Entities;

import lombok.Data;

import java.util.List;

@Data
public class Question {
    private Integer id;

    private String text;
    private Boolean is_required;
    private Integer position;

    private QuestionType type;

    private Theme theme;
    private List<QuestionChoice> questionChoices;
}

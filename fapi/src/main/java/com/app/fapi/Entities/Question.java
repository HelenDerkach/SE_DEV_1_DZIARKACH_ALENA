package com.app.fapi.Entities;

import lombok.Data;

import java.util.List;

@Data
public class Question {
    private Integer id;

    private String text;
    private Boolean isRequired;
    private Integer position;

    private Integer typeId;

    private Integer pollId;
    private Integer themeId;

    private List<QuestionChoice> questionChoices;
}

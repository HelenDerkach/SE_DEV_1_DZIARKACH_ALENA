package com.app.fapi.Entities;

import lombok.Data;

@Data
public class QuestionChoice {
    private Integer id;

    private String text;

    private Integer questionId;
}

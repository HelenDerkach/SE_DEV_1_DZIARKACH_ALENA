package com.app.fapi.Entities;

import lombok.Data;

@Data
public class Response {
    private Integer id;
    private String answer;

    private Integer pollResponseId;
    private Integer questionId;
}

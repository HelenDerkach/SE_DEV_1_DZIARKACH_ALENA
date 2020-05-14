package com.app.fapi.Entities;

import lombok.Data;

@Data
public class Response {
    private Integer id;
    private String answer;

    private PollResponse poll_response;
    private Question question;
}

package com.app.fapi.Entities;

import lombok.Data;

@Data
public class PollResponse {
    private Integer id;

    private String started_at;
    private String completed_at;

    private Poll poll;
}

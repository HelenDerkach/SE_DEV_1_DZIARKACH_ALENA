package com.app.fapi.Entities;

import lombok.Data;

import java.util.List;

@Data
public class PollResponse {
    private Integer id;

    private String startedAt;
    private String completedAt;

    private Integer pollId;
    private List<Response> responses;
}

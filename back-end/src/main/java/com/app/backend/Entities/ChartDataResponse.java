package com.app.backend.Entities;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ChartDataResponse {
    private String answer;
    private Integer count;
}

package com.app.fapi.Entities;

import lombok.Data;
import lombok.ToString;

@Data
public class Theme {
    private Integer id;
    private String title;
    private boolean is_private;

    @ToString.Exclude
    private Poll poll;
}

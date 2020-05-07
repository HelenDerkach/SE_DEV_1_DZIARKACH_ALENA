package com.app.fapi.Entities;

import lombok.Data;

@Data
public class Theme {
    private Integer id;
    private String title;
    private boolean is_private;

    private Poll poll;
}

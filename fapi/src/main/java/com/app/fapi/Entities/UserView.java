package com.app.fapi.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserView {
    private Integer id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
}

package com.app.fapi.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class User {
  private Integer id;
  private String firstName;
  private String lastName;
  private String email;
  private String phone;
  private String password;
  private Role role;
}

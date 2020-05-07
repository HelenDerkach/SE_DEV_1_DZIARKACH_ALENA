package com.app.fapi.Entities;

import lombok.Data;


@Data
public class User {
  private Integer id;

  private String firstName;
  private String lastName;
  private String email;
  private String phone;
  private String password;
  private Role role;
}

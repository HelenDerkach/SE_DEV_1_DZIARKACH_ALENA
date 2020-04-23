package com.app.backend.Entities;

import javax.persistence.Entity;
import javax.persistence.Table;

import javax.persistence.*;

@Entity 
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String firstName;
  private String lastName;

  private String email;
  private String phone;

  private String password;
  private Integer role;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String name) {
    this.firstName = name;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String name) {
    this.lastName = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }
}
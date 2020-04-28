package com.app.backend.Entities;

import javax.persistence.*;
import java.util.List;

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

  @ManyToOne
  @JoinColumn(name="role")
  private Role role;

  @OneToMany(mappedBy = "user")
  private List<Poll> polls;

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

  public String getPassword() {
        return password;
    }

  public void setPassword(String password) {
        this.password = password;
    }

  public Role getRole() {
        return role;
    }

  public void setRole(Role role) {
        this.role = role;
    }
}

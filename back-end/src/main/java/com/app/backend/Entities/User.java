package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity 
@Table(name = "users")
@Data
public class User {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer id;

  private String firstName;
  private String lastName;

  @Column(unique=true)
  private String email;

  private String phone;

  @JsonIgnore
  private String password;

  @ManyToOne
  @JoinColumn(name="role")
  private Role role;

  @OneToMany(mappedBy = "user")
  @JsonManagedReference (value="user-polls")
  private List<Poll> polls;
}

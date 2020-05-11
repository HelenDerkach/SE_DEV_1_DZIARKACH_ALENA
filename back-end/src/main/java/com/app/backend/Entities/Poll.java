package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name = "polls")
@Data
//@Builder
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.PropertyGenerator.class,
//        property = "id")
public class Poll {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String title;
    private String description;
    private String url;

    private String starts_at;
    private String ends_at;

    private Boolean is_published;

    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonBackReference (value="user-polls")
    private User user;

    @OneToMany(mappedBy = "poll")
    @JsonManagedReference (value="question-polls")
    private List<Question> questions;

    @OneToMany(mappedBy = "poll")
    @JsonManagedReference (value="theme-polls")
    private List<Theme> themes;
}

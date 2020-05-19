package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "themes")
@Data
public class Theme {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String title;

    @Column (name = "is_private")
    private boolean isPrivate;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "theme_id")
    private List<Question> questions;

//    @Column (name = "poll_id")
//    private Integer pollId;
}

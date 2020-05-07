package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "themes")
@Data
public class Theme {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private boolean is_private;

    @ManyToOne
    @JoinColumn(name="poll_id")
    @JsonBackReference (value="theme-polls")
    private Poll poll;
}

package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "themes")
public class Theme {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String title;

    private boolean is_private;

    @OneToMany(mappedBy = "theme", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Poll> polls;
}

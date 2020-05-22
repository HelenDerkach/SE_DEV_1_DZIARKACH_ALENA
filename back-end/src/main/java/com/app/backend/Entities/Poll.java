package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name = "polls")
@Data
public class Poll {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String title;
    private String description;
    private String url;

    @Column (name = "starts_at")
    private String startsAt;
    @Column (name = "ends_at")
    private String endsAt;

    @Column (name = "is_published")
    private Boolean isPublished;

    @Column (name = "user_id")
    private Integer userId;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_id")
    private List<Theme> themes;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_id")
    private List<Question> questions;
}

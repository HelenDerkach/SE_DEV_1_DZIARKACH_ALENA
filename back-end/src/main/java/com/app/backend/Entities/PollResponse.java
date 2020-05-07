package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="poll_responses")
@Data
public class PollResponse {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String started_at;
    private String completed_at;

    @ManyToOne
    @JoinColumn(name="poll_id")
    private Poll poll;
}

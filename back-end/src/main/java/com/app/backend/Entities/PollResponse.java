package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="poll_responses")
@Data
public class PollResponse {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    @Column (name = "started_at")
    private String startedAt;
    @Column (name = "completed_at")
    private String completedAt;

    @Column (name = "poll_id")
    private Integer pollId;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "poll_response_id")
    private List<Response> responses;
}

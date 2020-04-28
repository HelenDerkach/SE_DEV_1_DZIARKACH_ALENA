package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import javax.persistence.*;

@Entity
@Table(name="poll_responses")
public class PollResponse {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String started_at;
    private String completed_at;

    @ManyToOne
    @JoinColumn(name="poll_id")
    private Poll poll;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStarted_at() {
        return started_at;
    }

    public void setStarted_at(String started_at) {
        this.started_at = started_at;
    }

    public String getCompleted_at() {
        return completed_at;
    }

    public void setCompleted_at(String completed_at) {
        this.completed_at = completed_at;
    }

    public Poll getPoll() {
        return poll;
    }

    public void setPoll(Poll poll) {
        this.poll = poll;
    }
}

package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="responses")
@Data
public class Response {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String answer;

    @ManyToOne
    @JoinColumn(name="poll_response_id")
    private PollResponse poll_response;

    @ManyToOne
    @JoinColumn(name="question_id")
    private Question question;
}

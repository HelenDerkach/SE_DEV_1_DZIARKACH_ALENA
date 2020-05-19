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

    @Column (name = "poll_response_id")
    private Integer pollResponseId;

    @Column (name = "question_id")
    private Integer questionId;
}

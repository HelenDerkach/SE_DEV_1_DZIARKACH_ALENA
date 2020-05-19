package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table (name = "question_choices")
@Data
public class QuestionChoice {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String text;

    @Column (name = "question_id")
    private Integer questionId;
}

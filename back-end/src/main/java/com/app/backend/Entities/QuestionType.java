package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "question_types")
public class QuestionType {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "type")
    @JsonIgnore
    private List<Question> questions;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}

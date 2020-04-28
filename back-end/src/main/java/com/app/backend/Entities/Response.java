package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import javax.persistence.*;

@Entity
@Table(name="responses")
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

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public PollResponse getPoll_response() {
        return poll_response;
    }

    public void setPoll_response(PollResponse poll_response) {
        this.poll_response = poll_response;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
}

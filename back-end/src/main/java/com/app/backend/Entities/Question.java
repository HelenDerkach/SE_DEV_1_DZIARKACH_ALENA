package com.app.backend.Entities;

import com.fasterxml.jackson.annotation.*;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table (name="questions")
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.PropertyGenerator.class,
//        property = "id")
@Data
public class Question {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String text;

    @Column (name = "is_required")
    private Boolean isRequired;

    private Integer position;

    @Column (name = "type_id")
    private Integer typeId;

//    @Column (name = "poll_id")
//    private Integer pollId;
//
//    @Column (name = "theme_id")
//    private Integer themeId;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "question_id")
    private List<QuestionChoice> questionChoices;
}

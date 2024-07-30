package com.chestnut.backend.study;

import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

//읽기 전용 테이블이므로 기본 생성자만 만들고 따로 다른 생성자나 Builder은 만들지 않겠음
@Entity
@Table(name="Study_category")
@Getter
public class StudyCategory {
    @Id
    @Column(columnDefinition = "tinyint", nullable = false)
    private Long studyCategoryId;

    @Column(columnDefinition = "varchar(30)", nullable = false)
    private String categoryContent;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="parent_id")
    private StudyCategory parent;

    @OneToMany(mappedBy = "parent")
    private List<StudyCategory> child = new ArrayList<>();

    protected StudyCategory() {}
}

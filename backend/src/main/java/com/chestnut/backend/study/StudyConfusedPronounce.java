package com.chestnut.backend.study;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Table(name="Study_confused_pronounce")
@DiscriminatorValue("confused_pronunce")
@Getter
public class StudyConfusedPronounce extends Study {

    @Column(columnDefinition = "tinyint", nullable = false)
    private int confusedGroupId;

    protected StudyConfusedPronounce() {}
}
package com.chestnut.backend.study.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ChapterStudyInfoParentDto {
    private String categoryContent;
    private List<ChapterStudyInfoChildDto> child;
}

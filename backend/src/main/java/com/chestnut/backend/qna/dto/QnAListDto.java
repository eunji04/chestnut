package com.chestnut.backend.qna.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QnAListDto {

    private Long qnaId;
    private Byte qnaCategoryId;
    private String qnaCategoryName;
    private String title;
    private String nickname;
    private LocalDateTime createdAt;

    @JsonProperty("isAnswer")
    private boolean isAnswer;

    @JsonProperty("isAnswer")
    public boolean getisAnswer() {
        return isAnswer;
    }
}

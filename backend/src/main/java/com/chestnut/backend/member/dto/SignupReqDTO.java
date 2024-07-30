package com.chestnut.backend.member.dto;

import com.chestnut.backend.member.entity.Member;
import com.chestnut.backend.member.validation.annotation.Email;
import com.chestnut.backend.member.validation.annotation.LoginId;
import com.chestnut.backend.member.validation.annotation.Nickname;
import com.chestnut.backend.member.validation.annotation.Password;
import lombok.Getter;

import java.time.LocalDate;

@Getter
public class SignupReqDTO {

    @LoginId
    private String loginId;
    @Password
    private String password;
    private String checkPassword;
    @Email
    private String email;
    @Nickname
    private String nickname;
    private String memberName;
    private LocalDate birthday;

    public Member toEntity(){
        return Member.builder()
                .loginId(loginId)
                .password(password)
                .email(email)
                .nickname(nickname)
                .memberName(memberName)
                .birthday(birthday)
                .build();
    }

}
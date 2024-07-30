package com.chestnut.backend.member.validation.validator;

import com.chestnut.backend.common.exception.InvalidFormatException;
import com.chestnut.backend.member.validation.annotation.Nickname;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NicknameValidator implements ConstraintValidator<Nickname, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        if (value == null || value.trim().isEmpty()) {
            throw new InvalidFormatException("603");
        }

        String regex = "^[A-Za-z0-9가-힣]{2,20}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(value);
        if (!matcher.matches()) {
            throw new InvalidFormatException("603");
        }
        return true;
    }
}
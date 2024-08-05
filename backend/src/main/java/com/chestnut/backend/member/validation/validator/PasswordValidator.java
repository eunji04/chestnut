package com.chestnut.backend.member.validation.validator;

import com.chestnut.backend.common.exception.InvalidFormatException;
import com.chestnut.backend.common.exception.RefreshTokenException;
import com.chestnut.backend.member.validation.annotation.Password;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PasswordValidator implements ConstraintValidator<Password, String> {
    @Override
    public boolean isValid(String value, ConstraintValidatorContext constraintValidatorContext) {
        if (value == null || value.trim().isEmpty()) {
            //throw new InvalidFormatException();
            throw new RefreshTokenException();
        }

        String regex = "^[a-zA-Z0-9!@#$%^&*()_+\\[\\]{}|;':\",./<>?~`-]{8,15}$";
        System.out.println("===========6");
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(value);
        System.out.println("===========7");
        if (!matcher.matches()) {
            System.out.println("===========8");
            //throw new InvalidFormatException();
            throw new RefreshTokenException();
        }
        return true;
    }
}
package com.chestnut.backend.common.exception;

public class CustomException extends RuntimeException {
    public CustomException(String message) {
        super(message);
    }
}
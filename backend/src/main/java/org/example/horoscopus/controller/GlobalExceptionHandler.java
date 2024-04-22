package org.example.horoscopus.controller;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(value = PersistenceException.class)
    public ResponseEntity<?> handlePersistenceException(PersistenceException ex) {

        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
    }

    @ExceptionHandler(value = IllegalArgumentException.class)
    public ResponseEntity<?> handleIllegalArgumentException (IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
    @ExceptionHandler(value = EntityNotFoundException.class)
    public ResponseEntity<?> handleIllegalArgumentException (EntityNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
    @ExceptionHandler(value = MalformedJwtException.class)
    public ResponseEntity<?> handleMalformedJwtException (MalformedJwtException ex) {
        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }@ExceptionHandler(value = ExpiredJwtException.class)
    public ResponseEntity<?> handleExpiredJwtException (ExpiredJwtException ex) {
        return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ex.getMessage());
    }@ExceptionHandler(value = UnsupportedJwtException.class)
    public ResponseEntity<?> handleUnsupportedJwtException (UnsupportedJwtException ex) {
        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

}

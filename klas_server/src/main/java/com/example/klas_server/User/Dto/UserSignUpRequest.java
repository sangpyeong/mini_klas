package com.example.klas_server.User.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class UserSignUpRequest {
    private String name;
    private Integer studentId;
    private String password;
}

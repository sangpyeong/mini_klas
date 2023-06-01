package com.example.klas_server.User;

import org.springframework.util.Assert;

record SignInUserRequest(Integer userId, String password) {
    SignInUserRequest {
        Assert.notNull(userId, "id는 필수입니다.");
        Assert.hasText(password, "비밀번호는 필수입니다.");
    }
}

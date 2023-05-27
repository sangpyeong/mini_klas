package com.example.klas_server.User;

import org.springframework.util.Assert;

class User {
    private Long id;
    private final String name;
    private final Integer userId;
    private final String password;
    private final UserType userType;

    public User(final String name, final Integer userId, final String password, final UserType userType) {
        Assert.hasText(name, "이름은 필수입니다.");
        Assert.notNull(userId, "id는 필수입니다.");
        Assert.hasText(password, "비밀번호는 필수입니다.");
        Assert.notNull(userType, "사용자 유형은 필수입니다.");

        this.name = name;
        this.userId = userId;
        this.password = password;
        this.userType = userType;
    }

    public void assignId(final Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}

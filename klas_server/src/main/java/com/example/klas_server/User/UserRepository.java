package com.example.klas_server.User;

import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
class UserRepository {
    private Map<Long, User> persistence = new HashMap<>();
    private Long sequence = 0L;

    public void save(final User user) {
        user.assignId(++sequence);
        persistence.put(user.getId(), user);
    }
}

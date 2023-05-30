package com.example.klas_server.User;

import lombok.RequiredArgsConstructor;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void SignUp(final SignUpUserRequest req) {
        try {
            userRepository.save(User.builder()
                    .name(req.name())
                    .userId(req.userId())
                    .password(req.password())
                    .userType(req.userType())
                    .build());
        } catch (JpaSystemException e) {
            e.printStackTrace();
        }
    }
}

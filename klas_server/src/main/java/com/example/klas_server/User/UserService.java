package com.example.klas_server.User;


import com.example.klas_server.User.Dto.UserSignUpRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.orm.jpa.JpaSystemException;

@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void createUser(UserSignUpRequest req) {
        String name = req.getName();
        Integer studentId = req.getStudentId();
        String password = req.getPassword();

        try {
            userRepository.save(User.builder()
                    .name(name)
                    .studentId(studentId)
                    .password(password)
                    .build());
        } catch (JpaSystemException e) {
            e.printStackTrace();
        }
    }
}

package com.example.klas_server.User;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.example.klas_server.User.Dto.UserSignUpRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.orm.jpa.JpaSystemException;

public class UserServiceTest {
    private UserRepository userRepository;
    private UserService userService;

    @BeforeEach
    public void setUp() {
        userRepository = mock(UserRepository.class);
        userService = new UserService(userRepository);
    }

    @Test
    public void testCreateUser() {
        UserSignUpRequest req = new UserSignUpRequest("sanhak", 12345, "password");

        userService.createUser(req);

        User expectedUser = User.builder()
                .name("sanhak")
                .studentId(12345)
                .password("password")
                .build();

        // Verify that the userRepository.save() method was called with the expected User object
        Mockito.verify(userRepository).save(expectedUser);
    }

    @Test
    public void testCreateUserWithNullStudentId() {
        UserSignUpRequest req = new UserSignUpRequest("sanhak", null, "password");

        // Verify that an IllegalArgumentException is thrown when trying to create a user with a null studentId
        assertEquals(IllegalArgumentException.class, assertThrows(IllegalArgumentException.class, () -> {
            userService.createUser(req);
        }).getClass());
    }

    @Test
    public void testCreateUserWithDuplicateStudentId() {
        UserSignUpRequest req = new UserSignUpRequest("sanhak", 12345, "password");

        // Mock the userRepository.save() method to throw a JpaSystemException, simulating a duplicate studentId error
        when(userRepository.save(Mockito.any(User.class))).thenThrow(JpaSystemException.class);

        // Verify that a JpaSystemException is thrown when trying to create a user with a duplicate studentId
        assertEquals(JpaSystemException.class, assertThrows(JpaSystemException.class, () -> {
            userService.createUser(req);
        }).getClass());
    }
}
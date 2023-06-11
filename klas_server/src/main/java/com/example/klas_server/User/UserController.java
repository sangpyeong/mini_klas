package com.example.klas_server.User;

import com.example.klas_server.Exception.DuplicateUserException;
import com.example.klas_server.Exception.UserIdNotFoundException;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
class UserController {
    private final UserService userService;

    @PostMapping
    @Transactional
    public ResponseEntity<Void> SignUpUser(@RequestBody final SignUpUserRequest req) {
        try {
            userService.SignUp(req);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (DuplicateUserException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    public ResponseEntity<Void> SignInUser(@RequestBody final SignInUserRequest req) {
        try {
            String token = userService.SignIn(req);
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + token);
            return ResponseEntity.status(HttpStatus.ACCEPTED).headers(headers).build();
        } catch (UserIdNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        } catch (JpaSystemException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping(value = "/kakao")
    public ResponseEntity<Void> SignInKakao(@RequestBody final SignInKakaoRequest req, @RequestBody HttpServletResponse res) {
        userService.KakaoSignIn(req, res);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
//        try {
//            userService.KakaoSignIn(req, res);
//            return ResponseEntity.status(HttpStatus.ACCEPTED).build();
//        } catch (JsonProcessingException e) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
    }
}

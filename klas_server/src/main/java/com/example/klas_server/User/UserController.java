package com.example.klas_server.User;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
//        final User user = new User(req.name(), req.userId(), req.password(), req.userType());
//        userPort.save(user);
        userService.SignUp(req);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping
    public ResponseEntity<Void> SignInUser(@RequestBody final SignInUserRequest req) {
        userService.SignIn(req);
        return ResponseEntity.status(HttpStatus.ACCEPTED).build();
    }
}

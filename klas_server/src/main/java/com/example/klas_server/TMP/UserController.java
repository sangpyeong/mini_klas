//package com.example.klas_server.TMP;
//
//import com.example.klas_server.TMP.Dto.UserSignInRequest;
//import com.example.klas_server.TMP.Dto.UserSignUpRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/user")
//public class UserController {
//    private final UserService userService;
//
//    @PostMapping("/signup")
//    public ResponseEntity<Void> SignUp(@RequestBody UserSignUpRequest req) {
//        try {
//            if (req.getUserId() == null)
//                throw new IllegalArgumentException();
//            userService.SignUpUser(req);
//            return ResponseEntity.ok().build();
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//        }
//    }
//
//    @PostMapping("/signin")
//    public ResponseEntity<Void> SignIn(@RequestBody UserSignInRequest req) {
//        try {
//            if (req.getUserId() == null)
//                throw new IllegalArgumentException();
//            userService.SignInUser(req);
//            return ResponseEntity.ok().build();
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//        }
//    }
//}

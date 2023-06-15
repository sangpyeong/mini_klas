//package com.example.klas_server.TMP;
//
//
//import com.example.klas_server.TMP.Dto.UserSignInRequest;
//import com.example.klas_server.TMP.Dto.UserSignUpRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.orm.jpa.JpaSystemException;
//
//@RequiredArgsConstructor
//public class UserService {
//    private final UserRepository userRepository;
//
//    public void SignUpUser(UserSignUpRequest req) {
//        String name = req.getName();
//        Integer studentId = req.getUserId();
//        String password = req.getPassword();
//
//        try {
//            userRepository.save(User.builder()
//                    .name(name)
//                    .userId(studentId)
//                    .password(password)
//                    .build());
//        } catch (JpaSystemException e) {
//            e.printStackTrace();
//        }
//    }
//
//    public void SignInUser(UserSignInRequest req) {
//        Integer studentId = req.getUserId();
//        String password = req.getPassword();
//    }
//}

package com.example.klas_server.User;

import com.example.klas_server.Exception.DuplicateUserException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public void SignUp(final SignUpUserRequest req) {
        try {
            userRepository.findByUserId(req.userId()).ifPresent(user -> {
                throw new DuplicateUserException("사용자 " + req.userId() + "이 이미 존재합니다.");
            });
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

    public void SignIn(final SignInUserRequest req) {
        try {
            userRepository.findByUserId(req.userId()).;
            if (user)

            String token = getJwtToken(req.userId(), userType);
        } catch () {

        }

    }

    private static String getJwtToken(Integer userId, UserType userType) {
        Claims claims = Jwts.claims();
        claims.put("userId", userId.toString());
        claims.put("userType", userType.toString());

        byte[] keyBytes = Decoders.BASE64.decode("base64EncodedSecretKey");
        Key key = Keys.hmacShaKeyFor(keyBytes);

        int expirationTime = 3600_000; // 만료시간 1 hour
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationTime);

        return Jwts.builder()
                .setSubject(request.userId().toString())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }
}

package com.example.klas_server.User;

import com.example.klas_server.Exception.DuplicateUserException;
import com.example.klas_server.Exception.UserIdNotFoundException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.concurrent.atomic.AtomicReference;

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

    public String SignIn(final SignInUserRequest req) {
        try {
            AtomicReference<String> tokenRef = new AtomicReference<>();
            userRepository.findByUserId(req.userId()).ifPresentOrElse(user -> {
                tokenRef.set(getJwtToken(user.getUserId(), user.getUserType()));
            }, () -> {
                throw new UserIdNotFoundException("사용자 " + req.userId() + "가 존재하지 않습니다.");
            });
            return tokenRef.get();
        } catch (JpaSystemException e) {
            e.printStackTrace();
        }
        return null;
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
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }
}

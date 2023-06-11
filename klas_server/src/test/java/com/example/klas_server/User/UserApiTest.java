package com.example.klas_server.User;

import com.example.klas_server.ApiTest;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.restassured.RestAssured;
import io.restassured.response.ExtractableResponse;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import java.security.Key;
import java.util.Date;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class UserApiTest extends ApiTest {
    @Test
    void SignUp() {
        final var request = 회원가입요청_생성();
        final var response = 회원가입_요청(request);

        assertThat(response.statusCode()).isEqualTo(HttpStatus.CREATED.value());
    }

    private static String JWT_생성(SignInUserRequest request) {
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

    @Test
    void SignIn() {
        final var request = 로그인요청_생성();
        final var response = 로그인_요청(request);

        assertThat(response.statusCode()).isEqualTo(HttpStatus.ACCEPTED.value());
        assertThat(response.headers().getValue("Authorization")).isNotNull();
    }

    private static ExtractableResponse<Response> 회원가입_요청(SignUpUserRequest request) {
        return RestAssured.given().log().all()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(request)
                .when()
                .post("/users")
                .then()
                .log().all().extract();
    }

    private static SignUpUserRequest 회원가입요청_생성() {
        final String name = "이연걸";
        final Integer userId = 2018202076;
        final String password = "password";
        final UserType userType = UserType.STUDENT;

        return new SignUpUserRequest(name, userId, password, userType);
    }

    private static ExtractableResponse<Response> 로그인_요청(SignInUserRequest request) {
        return RestAssured.given().log().all()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .body(request)
                .when()
                .get("/users")
                .then()
                .log().all().extract();
    }

    private static SignInUserRequest 로그인요청_생성() {
        final Integer userId = 2018202076;
        final String password = "password";

        return new SignInUserRequest(userId, password);
    }
}
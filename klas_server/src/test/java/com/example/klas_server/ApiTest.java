package com.example.klas_server;

import io.restassured.RestAssured;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.context.WebServerInitializedEvent;
import org.springframework.context.event.EventListener;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiTest {
    @EventListener
    public void onWebInit(WebServerInitializedEvent event) {
        RestAssured.port = event.getWebServer().getPort();
    }
}

package com.example.klas_server.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Getter
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(nullable = false, name = "studentid")
    private Integer studentId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, name = "usertype")
    private String userType;

    @Column(nullable = false)
    private String password;
}
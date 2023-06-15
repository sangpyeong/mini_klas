package com.example.klas_server.Board;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "board")
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private String author;
    @Column(nullable = false, name = "createdat")
    private Date createdAt;
}
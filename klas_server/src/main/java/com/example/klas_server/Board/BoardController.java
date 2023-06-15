package com.example.klas_server.Board;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
@RequiredArgsConstructor
class BoardController {
    @GetMapping
    public ResponseEntity<List<Board>> GetList() {
        try {
            List<Board> list = boardService.listUp();
            return ResponseEntity.status(HttpStatus.OK).body(list);
        } catch () {

        }
    }
}

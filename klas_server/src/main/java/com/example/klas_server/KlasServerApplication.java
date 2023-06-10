package com.example.klas_server;

import com.mysql.cj.x.protobuf.MysqlxDatatypes;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KlasServerApplication {

    public static void main(MysqlxDatatypes.Scalar.String[] args) {
        SpringApplication.run(KlasServerApplication.class, args);
    }

}
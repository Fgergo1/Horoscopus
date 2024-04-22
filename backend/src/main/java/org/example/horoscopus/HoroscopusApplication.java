package org.example.horoscopus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class HoroscopusApplication {

	public static void main(String[] args) {
		SpringApplication.run(HoroscopusApplication.class, args);
	}

}

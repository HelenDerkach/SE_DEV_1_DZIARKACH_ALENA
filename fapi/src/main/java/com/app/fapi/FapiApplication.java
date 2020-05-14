package com.app.fapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FapiApplication {

	public static void main(String[] args) {
		System.setProperty("server.servlet.context-path", "/api"); //TODO delete this and add api everywhere
		SpringApplication.run(FapiApplication.class, args);
	}

}

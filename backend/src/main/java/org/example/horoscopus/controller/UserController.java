package org.example.horoscopus.controller;

import org.example.horoscopus.DTO.LoginUserDTO;
import org.example.horoscopus.DTO.RegisterUserDTO;
import org.example.horoscopus.model.User;
import org.example.horoscopus.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

   private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser (@RequestBody RegisterUserDTO registerUserDTO) {

        if (userService.saveNewUser(registerUserDTO)) {
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser (@RequestBody LoginUserDTO loginUserDTO) {

        // need to set up the security
    }

}

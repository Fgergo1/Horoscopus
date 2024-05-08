package org.example.horoscopus.controller;

import org.example.horoscopus.DTO.LoginUserDTO;
import org.example.horoscopus.DTO.RegisterUserDTO;
import org.example.horoscopus.model.payload.JwtResponse;
import org.example.horoscopus.security.jwt.JwtUtils;
import org.example.horoscopus.service.UserService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;

    public UserController(UserService userService, AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody RegisterUserDTO registerUserDTO) {

        userService.saveNewUser(registerUserDTO);
        return new ResponseEntity<>(HttpStatus.CREATED);


    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginUserDTO loginUserDTO) {


        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    loginUserDTO.getUserName(), loginUserDTO.getPassword()
            ));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtUtils.generateJwtToken(authentication);
            User userDetails = (User) authentication.getPrincipal();
            List<String> roles = userDetails.getAuthorities().stream().map(GrantedAuthority::getAuthority)
                    .toList();

            return ResponseEntity.ok()
                    .header(HttpHeaders.AUTHORIZATION, jwt)
                    .body(new JwtResponse(jwt, loginUserDTO.getUserName(), roles));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("This is from the catch: " + e.getMessage());
        }
    }

    @GetMapping("/name")
    public ResponseEntity<?> checkUserNameIsFree(@RequestParam String name) {

        if (!userService.checkName(name)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).build();

    }

    @GetMapping("/email")
    public ResponseEntity<?> checkEmailIsFree(@RequestParam String email) {
        if (!userService.checkEmail(email)) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
    }

    @GetMapping("/data")
    public ResponseEntity<?> getUserEmailAndName(@RequestHeader(name = "Authorization") String authToken) {

        RegisterUserDTO userDTO = userService.getEmailAndName(authToken);

        return ResponseEntity.ok(userDTO);
    }

}

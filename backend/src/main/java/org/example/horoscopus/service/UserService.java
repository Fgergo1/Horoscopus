package org.example.horoscopus.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceException;
import org.example.horoscopus.DTO.RegisterUserDTO;
import org.example.horoscopus.model.Role;
import org.example.horoscopus.model.UserEntity;
import org.example.horoscopus.repository.UserRepository;
import org.example.horoscopus.security.jwt.JwtUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final JwtUtils jwtUtils;


    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtUtils jwtUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    public void saveNewUser(RegisterUserDTO registerUserDTO) {

        if (registerUserDTO != null) {
            UserEntity userEntity = new UserEntity(registerUserDTO.getUserName(), registerUserDTO.getEmail(),
                    passwordEncoder.encode(registerUserDTO.getPassword()), Role.ROLE_USER);
            try {
                userRepository.save(userEntity);
            } catch (PersistenceException e) {
                throw new PersistenceException("User is already exist in the database!");
            }
        }
        throw new NullPointerException("User is null!");
    }

    public boolean checkName(String userName) {
        return userRepository.existsByUserName(userName);
    }

    public boolean checkEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    public RegisterUserDTO getEmailAndName(String authHeader) {
        if (authHeader == null || authHeader.isEmpty()) {
            throw new IllegalArgumentException("User name cannot be empty or null");
        }

        try {
            String token = authHeader.substring("Bearer ".length());

            UserEntity user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token))
                    .orElseThrow(() -> new EntityNotFoundException("User not found"));

            return new RegisterUserDTO(user.getUserName(), null, user.getEmail());
        } catch (StringIndexOutOfBoundsException e) {
            throw new StringIndexOutOfBoundsException("The token is invalid!");
        }

    }

}

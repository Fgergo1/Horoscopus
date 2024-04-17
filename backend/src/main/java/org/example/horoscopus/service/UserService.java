package org.example.horoscopus.service;

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

    public boolean saveNewUser(RegisterUserDTO registerUserDTO) {

        UserEntity userEntity = new UserEntity(registerUserDTO.getUserName(), registerUserDTO.getEmail(),
                passwordEncoder.encode(registerUserDTO.getPassword()), Role.ROLE_USER);
        try {
            userRepository.save(userEntity);
            return true;
        } catch (PersistenceException e) {
            return false;
        }
    }

    public boolean checkName(String userName) {
       return userRepository.existsByUserName(userName);
    }

    public boolean checkEmail(String email) {
       return userRepository.existsByEmail(email);
    }

    public RegisterUserDTO getEmailAndName(String authHeader) {
        String token = authHeader.substring("Bearer ".length());
        UserEntity user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token)).orElseThrow();

        return new RegisterUserDTO(user.getUserName(),null,user.getEmail());

    }

}

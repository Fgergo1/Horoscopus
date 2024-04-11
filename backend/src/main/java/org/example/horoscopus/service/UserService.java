package org.example.horoscopus.service;

import jakarta.persistence.PersistenceException;
import org.example.horoscopus.DTO.RegisterUserDTO;
import org.example.horoscopus.model.Role;
import org.example.horoscopus.model.UserEntity;
import org.example.horoscopus.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public boolean saveNewUser(RegisterUserDTO registerUserDTO) {

        UserEntity userEntity = new UserEntity(registerUserDTO.getUsername(), registerUserDTO.getEmail(),
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



}

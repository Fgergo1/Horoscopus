package org.example.horoscopus.service;

import jakarta.persistence.PersistenceException;
import org.example.horoscopus.DTO.RegisterUserDTO;
import org.example.horoscopus.model.User;
import org.example.horoscopus.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean saveNewUser(RegisterUserDTO registerUserDTO) {

        User user = new User(registerUserDTO.getUsername(), registerUserDTO.getEmail(), registerUserDTO.getPassword());
        try {
            userRepository.save(user);
            return true;
        } catch (PersistenceException e) {
            return false;
        }
    }


}

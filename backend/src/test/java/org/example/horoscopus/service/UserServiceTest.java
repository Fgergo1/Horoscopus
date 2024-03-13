package org.example.horoscopus.service;

import jakarta.persistence.PersistenceException;
import org.example.horoscopus.DTO.RegisterUserDTO;
import org.example.horoscopus.model.Role;
import org.example.horoscopus.model.UserEntity;
import org.example.horoscopus.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

@SpringBootTest
class UserServiceTest {

    @MockBean
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Test
    void testSaveNewUserWhenUserIsNotExistInDatabase() {

        RegisterUserDTO registerUserDTO = new RegisterUserDTO("ok", "ok", "ok@ok.com");

        when(userService.saveNewUser(registerUserDTO)).thenReturn(true);
        assertTrue(userService.saveNewUser(registerUserDTO));
    }

    @Test
    void testSaveNewUserWhenUserAlreadyExistInDatabase() {
        RegisterUserDTO registerUserDTO = new RegisterUserDTO("random", "random", "random@random.com");

        doThrow(PersistenceException.class).when(userRepository).save(any());

        assertFalse(userService.saveNewUser(registerUserDTO));
    }
}
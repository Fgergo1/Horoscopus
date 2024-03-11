package org.example.horoscopus.repository;

import org.example.horoscopus.model.RegisterUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisterUserRepository extends JpaRepository<RegisterUser, Long> {

}

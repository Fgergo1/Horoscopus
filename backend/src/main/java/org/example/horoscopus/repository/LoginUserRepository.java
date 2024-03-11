package org.example.horoscopus.repository;

import org.example.horoscopus.model.LoginUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginUserRepository extends JpaRepository<LoginUser, Long> {
}

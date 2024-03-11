package org.example.horoscopus.repository;

import org.example.horoscopus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    boolean findUserByEmailOrPasswordOrUserName(String email, String password, String userName);
}

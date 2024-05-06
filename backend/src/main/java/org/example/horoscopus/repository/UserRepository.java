package org.example.horoscopus.repository;

import org.example.horoscopus.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<UserEntity, UUID> {

    Optional<UserEntity> findByUserName(String userName);

    boolean existsByUserName(String userName);
    boolean existsByEmail(String email);
}

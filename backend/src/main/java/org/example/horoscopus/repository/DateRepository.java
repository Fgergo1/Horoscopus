package org.example.horoscopus.repository;
import org.antlr.v4.runtime.misc.NotNull;
import org.example.horoscopus.model.FreeDateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;


public interface DateRepository extends JpaRepository<FreeDateEntity, UUID> {


    List<FreeDateEntity> findAllByReservedFalse();

    List<FreeDateEntity> findFreeDateEntitiesByUserEntityUserName(String name);

    @Override
    Optional<FreeDateEntity> findById(UUID uuid);
}

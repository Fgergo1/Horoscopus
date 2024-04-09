package org.example.horoscopus.repository;
import org.antlr.v4.runtime.misc.NotNull;
import org.example.horoscopus.model.FreeDateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DateRepository extends JpaRepository<FreeDateEntity,Long> {


    List<FreeDateEntity> findAllByReservedFalse();

    void deleteById(Long id);



}

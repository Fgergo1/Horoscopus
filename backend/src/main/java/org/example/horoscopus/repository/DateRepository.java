package org.example.horoscopus.repository;
import org.example.horoscopus.model.FreeDateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DateRepository extends JpaRepository<FreeDateEntity,Long> {

    List<FreeDateEntity> getAll();
    boolean deleteByTimeInterval(String interval);

}

package org.example.horoscopus.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.PersistenceException;
import org.example.horoscopus.DTO.FreeDateDTO;
import org.example.horoscopus.model.FreeDateEntity;
import org.example.horoscopus.model.UserEntity;
import org.example.horoscopus.repository.DateRepository;
import org.example.horoscopus.repository.UserRepository;
import org.example.horoscopus.security.jwt.JwtUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
public class DateService {

    private final DateRepository dateRepository;
    private final UserRepository userRepository;
    private final JwtUtils jwtUtils;

    public DateService(DateRepository repository, UserRepository userRepository, JwtUtils jwtUtils) {
        this.dateRepository = repository;
        this.userRepository = userRepository;
        this.jwtUtils = jwtUtils;
    }

    public List<FreeDateDTO> getFreeDatesFromDatabase() {
        return dateRepository.findAllByReservedFalse().stream().map((freeDateEntity -> new FreeDateDTO(freeDateEntity.getId(), freeDateEntity.getTimeInterval(), freeDateEntity.isReserved())))
                .toList();
    }

    @Transactional
    public void reserveDate(String authHeader, UUID dateId) {
        if (authHeader == null || authHeader.isEmpty()) {
            throw new IllegalArgumentException("User name cannot be empty or null");
        } else if (dateId == null) {
            throw new IllegalArgumentException("The date ID is wrong!");
        }

        String token = authHeader.substring("Bearer ".length());


        try {
            if (userRepository.findByUserName(jwtUtils.getUsernameFromToken(token)).isEmpty()) {
                throw new EntityNotFoundException("User is not found!");
            } else if (dateRepository.findById(dateId).isEmpty()) {
                throw new EntityNotFoundException("Date is not found!");
            }

            UserEntity user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token)).get();
            FreeDateEntity freeDate = dateRepository.findById(dateId).get();


            user.addNewDate(freeDate);
            freeDate.setReserved(true);

            userRepository.save(user);
            dateRepository.save(freeDate);


        } catch (PersistenceException ex) {
            throw new PersistenceException("User or date already exist in database!");
        }
    }

    public boolean saveNewDate(FreeDateDTO freeDateDTO) {
        if (freeDateDTO == null || freeDateDTO.getInterval() == null) {
            throw new IllegalArgumentException("The date interval cannot be null!");
        }
        try {
            dateRepository.save(new FreeDateEntity(freeDateDTO.getInterval(), freeDateDTO.getReserved()));
            return true;
        } catch (PersistenceException exception) {
            throw new PersistenceException("Date" + freeDateDTO.getInterval() + "cannot be saved!");
        }
    }

    public List<FreeDateDTO> getDatesByUserName(String authHeader) {

        if (authHeader == null || authHeader.isEmpty()) {
            throw new IllegalArgumentException("User name cannot be empty or null");
        }

        String token = authHeader.substring("Bearer ".length());

        UserEntity user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token))
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        List<FreeDateDTO> dates = dateRepository.findFreeDateEntitiesByUserEntityUserName(user.getUserName()).stream()
                .map((date) -> new FreeDateDTO(date.getId(), date.getTimeInterval(), date.isReserved())).toList();

        if (dates.isEmpty()) {
            throw new NoSuchElementException("There are no reserved dates!");
        }
        return dates;
    }

    public void deleteDateById(UUID id) {

        if (dateRepository.findById(id).isPresent()) {
            dateRepository.deleteById(id);

        }
        throw new NoSuchElementException("Date is not deleted, because not found!");
    }
}

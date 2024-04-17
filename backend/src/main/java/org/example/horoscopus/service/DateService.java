package org.example.horoscopus.service;

import org.example.horoscopus.DTO.FreeDateDTO;
import org.example.horoscopus.model.FreeDateEntity;
import org.example.horoscopus.model.UserEntity;
import org.example.horoscopus.repository.DateRepository;
import org.example.horoscopus.repository.UserRepository;
import org.example.horoscopus.security.jwt.JwtUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public boolean reserveDate(String autHeader, Long dateId) {
        String token = autHeader.substring("Bearer ".length());

        try {
            Optional<UserEntity> user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token));
            Optional<FreeDateEntity> freeDate = dateRepository.findById(dateId);

            if (user.isPresent() && freeDate.isPresent()) {
                UserEntity userEntity = user.get();
                FreeDateEntity date = freeDate.get();

                userEntity.addNewDate(date);
                date.setReserved(true);

                userRepository.save(userEntity);
                dateRepository.save(date);

                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }

    }

    public boolean saveNewDate(FreeDateDTO freeDateDTO) {
        try {
            dateRepository.save(new FreeDateEntity(freeDateDTO.getInterval(), freeDateDTO.getReserved()));
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    public List<FreeDateDTO> getDatesByUserName (String token) {
        UserEntity user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token)).orElseThrow();
        return dateRepository.findFreeDateEntitiesByUserEntityUserName(user.getUserName()).stream()
                .map((date) -> new FreeDateDTO(date.getId(),date.getTimeInterval(),date.isReserved())).toList();
    }

    public void deleteDateById (long id) {
       dateRepository.deleteById(id);
    }
}

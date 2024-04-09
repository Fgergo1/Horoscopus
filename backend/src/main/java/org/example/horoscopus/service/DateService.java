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

    public List<FreeDateDTO> getFreeDatesFromDatabase () {
       return dateRepository.findAllByReservedFalse().stream().map((freeDateEntity -> new FreeDateDTO(freeDateEntity.getTimeInterval())))
               .toList();
  }

  public boolean reserveDate(String autHeader, Long dateId) {
        String token = autHeader.substring("Bearer ".length());

        try {
            Optional<UserEntity> user = userRepository.findByUserName(jwtUtils.getUsernameFromToken(token));
            Optional<FreeDateEntity> freeDate = dateRepository.findById(dateId);

            if (user.isPresent() && freeDate.isPresent()) {
                user.get().addNewDate(freeDate.get());
                freeDate.get().setReserved(true);
                return true;
            } else {
                return false;
            }
        }catch (Exception e) {
            return  false;
        }

  }
  public boolean saveNewDate (FreeDateDTO freeDateDTO) {
        try {
            dateRepository.save(new FreeDateEntity(freeDateDTO.getInterval(), freeDateDTO.getReserved()));
            return true;
        } catch (Exception exception) {
            return false;
        }
  }
}

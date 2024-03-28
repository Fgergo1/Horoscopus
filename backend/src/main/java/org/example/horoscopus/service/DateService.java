package org.example.horoscopus.service;
import org.example.horoscopus.DTO.FreeDateDTO;
import org.example.horoscopus.model.FreeDateEntity;
import org.example.horoscopus.repository.DateRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DateService {

    private final DateRepository repository;

    public DateService(DateRepository repository) {
        this.repository = repository;
    }

    public List<FreeDateDTO> getFreeDatesFromDatabase () {
       return repository.findAll().stream().map((freeDateEntity -> new FreeDateDTO(freeDateEntity.getTimeInterval())))
               .toList();
  }

  public boolean deleteDate (FreeDateDTO freeDateDTO) {
        return repository.deleteByTimeInterval(freeDateDTO.getDate());
  }
  public boolean saveNewDate (FreeDateDTO freeDateDTO) {
        try {
            repository.save(new FreeDateEntity(freeDateDTO.getDate()));
            return true;
        } catch (Exception exception) {
            return false;
        }
  }
}

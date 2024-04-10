package org.example.horoscopus.controller;

import org.example.horoscopus.DTO.FreeDateDTO;
import org.example.horoscopus.service.DateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/date")
public class DateController {

    private final DateService dateService;

    public DateController(DateService dateService) {
        this.dateService = dateService;
    }

    @GetMapping("/free")
    public ResponseEntity<?> getFreeDates() {
        List<FreeDateDTO> dates = dateService.getFreeDatesFromDatabase();

        if (dates.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(dates);
    }

    @PostMapping("/add")
    public ResponseEntity<?> saveNewDate (@RequestBody FreeDateDTO date) {
        if (dateService.saveNewDate(date)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/reserve")
    public ResponseEntity<?> deleteDate (@RequestHeader(name = "Authorization") String authHeader,@RequestBody Long date) {
        if (dateService.reserveDate(authHeader,date)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}

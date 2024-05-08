package org.example.horoscopus.controller;

import org.example.horoscopus.DTO.FreeDateDTO;
import org.example.horoscopus.service.DateService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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
    public ResponseEntity<?> saveNewDate(@RequestBody FreeDateDTO date) {
        dateService.saveNewDate(date);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @PostMapping("/reserve")
    public ResponseEntity<?> reserveDate(@RequestHeader(name = "Authorization") String authHeader, @RequestBody UUID dateId) {
        dateService.reserveDate(authHeader, dateId);
        return new ResponseEntity<>(HttpStatus.OK);

    }

    @GetMapping("/reserved")
    public ResponseEntity<?> getReservedDatesByName(@RequestHeader(name = "Authorization") String authHeader) {
        List<FreeDateDTO> reservedDates = dateService.getDatesByUserName(authHeader);
        return ResponseEntity.ok(reservedDates);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteDate(@RequestParam UUID id) {
        dateService.deleteDateById(id);
        return ResponseEntity.ok().build();
    }

}

package org.example.horoscopus.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class FreeDateEntity {

    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String timeInterval;

    public FreeDateEntity(String timeInterval) {
        this.timeInterval = timeInterval;
    }

    public FreeDateEntity() {
    }


    public String getTimeInterval() {
        return timeInterval;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTimeInterval(String timeInterval) {
        this.timeInterval = timeInterval;
    }
}



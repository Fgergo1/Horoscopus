package org.example.horoscopus.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class FreeDateEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true)
    private String timeInterval;

    private Boolean reserved;

    @ManyToOne
    @JoinColumn(name = "userEntity_id")
    private UserEntity userEntity;

    public FreeDateEntity(String timeInterval, boolean reserved) {
        this.timeInterval = timeInterval;
        this.reserved = reserved;
    }

    public FreeDateEntity() {
    }



    public String getTimeInterval() {
        return timeInterval;
    }

    public UUID getId() {
        return id ;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setTimeInterval(String timeInterval) {
        this.timeInterval = timeInterval;
    }

    public void setUserEntity(UserEntity userEntity) {
        this.userEntity = userEntity;
    }

    public UserEntity getUserEntity() {
        return userEntity;
    }

    public void setReserved(boolean reserved) {
        this.reserved = reserved;
    }

    public boolean isReserved() {
        return reserved;
    }
}



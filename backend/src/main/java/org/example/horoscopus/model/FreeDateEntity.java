package org.example.horoscopus.model;

import jakarta.persistence.*;

@Entity
public class FreeDateEntity {

    @Id
    @GeneratedValue
    private Long id;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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



package org.example.horoscopus.model;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity

public class UserEntity {

    @Id
    @GeneratedValue
    private Long id;
    @Column(unique=true)
    private String userName;
    @Column(unique=true)
    private String email;

    @OneToMany(mappedBy = "userEntity", cascade = CascadeType.ALL)
    private Set<FreeDateEntity> date;

    private String password;

    private Role role;

    public UserEntity(String userName, String email, String password, Role role) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.role = role;
        this.date = new HashSet<>();
    }

    public UserEntity() {

    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Role getRole() {
        return role;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void addNewDate (FreeDateEntity freeDate) {
        date.add(freeDate);
        freeDate.setUserEntity(this);
    }
}

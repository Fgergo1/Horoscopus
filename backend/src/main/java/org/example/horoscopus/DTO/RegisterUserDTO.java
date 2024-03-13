package org.example.horoscopus.DTO;

public class RegisterUserDTO {
    private String username;
    private String password;
    private String email;

    public RegisterUserDTO(String username, String password, String email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}

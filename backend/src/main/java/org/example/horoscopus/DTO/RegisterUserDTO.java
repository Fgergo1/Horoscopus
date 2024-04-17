package org.example.horoscopus.DTO;

public class RegisterUserDTO {
    private String userName;
    private String password;
    private String email;

    public RegisterUserDTO(String username, String password, String email) {
        this.userName = username;
        this.password = password;
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}

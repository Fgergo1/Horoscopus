package org.example.horoscopus.DTO;

public class LoginUserDTO {

    private String userName;
    private String password;

    public LoginUserDTO(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }
}

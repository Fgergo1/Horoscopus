package org.example.horoscopus.model.payload;

import java.util.ArrayList;
import java.util.List;

public class JwtResponse {

    private String jwt;

    private String userName;

    private List<String> roles;

    public JwtResponse(String jwt, String userName, List<String> roles) {
        this.jwt = jwt;
        this.userName = userName;
        this.roles = roles;
    }
}

package org.example.horoscopus.DTO;

public class FreeDateDTO {

    private String interval;

    private boolean reserved;

    public FreeDateDTO() {

    }

    public FreeDateDTO(String interval) {
        this.interval = interval;
        this.reserved  = false;
    }


    public String getInterval() {
        return interval;
    }

    public boolean getReserved() {
        return reserved;
    }
}

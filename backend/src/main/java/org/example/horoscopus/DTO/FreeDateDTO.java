package org.example.horoscopus.DTO;

import java.util.UUID;

public class FreeDateDTO {

    private UUID id;

    private String interval;

    private boolean reserved;

    public FreeDateDTO() {

    }

    public FreeDateDTO(UUID id, String interval, boolean reserved) {
        this.id = id;
        this.interval = interval;
        this.reserved  = reserved;
    }


    public String getInterval() {
        return interval;
    }

    public boolean getReserved() {
        return reserved;
    }



    public UUID getId() {
        return id;
    }


}

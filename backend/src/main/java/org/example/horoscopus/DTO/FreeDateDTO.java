package org.example.horoscopus.DTO;

public class FreeDateDTO {

    private Long id;

    private String interval;

    private boolean reserved;

    public FreeDateDTO() {

    }

    public FreeDateDTO(Long id, String interval, boolean reserved) {
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



    public Long getId() {
        return id;
    }


}

package com.example.backend.phrases.models;

import jakarta.persistence.*;

@Entity
public class Phrases {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(columnDefinition = "text")
    private String informalPhrase;
    @Column(columnDefinition = "text")
    private String formalPhrase;

    public Phrases(){}

    public Phrases(long id,String informalPhrase, String formalPhrase) {
        this.id = id;
        this.informalPhrase = informalPhrase;
        this.formalPhrase = formalPhrase;
    }

    public long getId() {
        return id;
    }

    public String getFormalPhrase() {
        return formalPhrase;
    }

    public void setFormalPhrase(String formalPhrase) {
        this.formalPhrase = formalPhrase;
    }


    public String getInformalPhrase() {
        return informalPhrase;
    }

    public void setInformalPhrase(String informalPhrase) {
        this.informalPhrase = informalPhrase;
    }
}
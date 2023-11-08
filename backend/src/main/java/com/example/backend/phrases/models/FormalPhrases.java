package com.example.backend.phrases.models;

import jakarta.persistence.*;

@Entity
public class FormalPhrases {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(columnDefinition = "text")
    private String formalPhrase;

    public FormalPhrases(){}

    public FormalPhrases(long id, String formalPhrase) {
        this.id = id;
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
}
package com.example.backend.user.model;

import com.example.backend.phrases.models.Phrases;
import jakarta.persistence.*;

@Entity
public class SavedPhrases {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    public Phrases getPhrases() {
        return phrases;
    }

    public void setPhrases(Phrases phrases) {
        this.phrases = phrases;
    }

    public UserName getUserName() {
        return userName;
    }

    public void setUserName(UserName userName) {
        this.userName = userName;
    }

    @ManyToOne
    Phrases phrases;

    @ManyToOne
     UserName userName;

    public SavedPhrases(){}
    public SavedPhrases(String id, UserName userName, Phrases phrases) {
        this.id = id;
        this.userName = userName;
        this.phrases = phrases;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public UserName getUser() {
        return userName;
    }

    public void setUser(UserName user) {
        this.userName = user;
    }
}
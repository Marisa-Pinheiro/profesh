package com.example.backend.user.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class UserName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String userName;

    @Column
    @OneToMany(mappedBy = "userName", cascade = CascadeType.ALL)
    private List<SavedPhrases> savedPhrases;


    public UserName(){}
    public UserName(long id, String name, List<SavedPhrases> savedPhrases) {
        this.id = id;
        this.userName = name;
        this.savedPhrases = savedPhrases;
    }

    public long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String name) {
        this.userName = name;
    }

    public List<SavedPhrases> getSavedPhrases() {
        return savedPhrases;
    }

    public void setSavedPhrases(List<SavedPhrases> savedPhrases) {
        this.savedPhrases = savedPhrases;
    }
}
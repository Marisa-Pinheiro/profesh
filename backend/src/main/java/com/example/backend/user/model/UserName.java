package com.example.backend.user.model;

import com.example.backend.phrases.models.Phrases;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "credentials")
public class UserName {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String userName;


   @Column
   @JsonIgnore
   @OneToMany(mappedBy = "userName", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<SavedPhrases> savedPhrases = new ArrayList<>();


    public UserName(){}
    public UserName(String id, String name, List<SavedPhrases> savedPhrases) {
        this.id = id;
        this.userName = name;
        this.savedPhrases = savedPhrases;
    }

    public String getId() {
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

    public void addPhrase(SavedPhrases phrase){
        savedPhrases.add(phrase);
    }
}
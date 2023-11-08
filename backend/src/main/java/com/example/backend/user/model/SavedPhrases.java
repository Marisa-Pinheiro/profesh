package com.example.backend.user.model;

import jakarta.persistence.*;

@Entity
public class SavedPhrases {

    @Id
    private long id;

    @Column(columnDefinition = "text")
    private String savedPhrase;

    @ManyToOne
    @JoinColumn(name = "userName_id")
    private UserName userName;

    public SavedPhrases(){}
    public SavedPhrases(long id, UserName userName) {
        this.id = id;
        this.userName = userName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UserName getUser() {
        return userName;
    }

    public void setUser(UserName user) {
        this.userName = user;
    }
}
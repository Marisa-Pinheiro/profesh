package com.example.backend.user.repo;

import com.example.backend.phrases.models.Phrases;
import com.example.backend.user.model.SavedPhrases;
import com.example.backend.user.model.UserName;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserNameRepository {

    private final JpaUserNameRepository jpaRepo;

    public UserNameRepository(JpaUserNameRepository jpaRepo){
        this.jpaRepo = jpaRepo;
    }

    public UserName saveUsername(UserName userName){return jpaRepo.save(userName);}

    public UserName findById(String userNameId){return jpaRepo.findById(userNameId).orElseThrow();}

    public void deleteUserNameById(String userNameId){
        UserName userName = jpaRepo.findById(userNameId).orElseGet(UserName::new);
        jpaRepo.delete(userName);
    }

    public void addPhrase(String id, Phrases phrases){
        UserName userName = jpaRepo.findById(id).orElseThrow();
        SavedPhrases savedPhrases = new SavedPhrases();
        savedPhrases.setPhrases(phrases);
        savedPhrases.setUser(findById(id));
        userName.addPhrase(savedPhrases);
        jpaRepo.save(userName);
    }

    public List<SavedPhrases> getSavedPhrases(String id){
        UserName user = jpaRepo.findById(id).orElseThrow();
       return user.getSavedPhrases();
    }

    public void saveSavedPhrases(String id, List<SavedPhrases> savedPhrases){
        UserName user = jpaRepo.findById(id).orElseThrow();
        user.setSavedPhrases(savedPhrases);
        jpaRepo.save(user);
    }



}
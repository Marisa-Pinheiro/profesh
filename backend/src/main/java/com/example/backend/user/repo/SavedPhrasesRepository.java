package com.example.backend.user.repo;

import com.example.backend.user.model.SavedPhrases;
import org.springframework.stereotype.Repository;


@Repository
public class SavedPhrasesRepository {
    private final JpaSavedPhrasesRepository jpaRepo;

    public SavedPhrasesRepository(JpaSavedPhrasesRepository jpaRepo){
        this.jpaRepo = jpaRepo;
    }


    public SavedPhrases save(SavedPhrases savedPhrases) {
        return jpaRepo.save(savedPhrases);
    }

    public SavedPhrases findById(String savedPhrasesId) {
        return jpaRepo.findById(savedPhrasesId).orElse(null);
    }

    public void deleteASavedPhrase(String savedId){
        jpaRepo.deleteById(savedId);
    }


}
package com.example.backend.phrases.repos;

import com.example.backend.phrases.models.Phrases;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PhrasesRepository {

    private final JpaPhrasesRepository jpaRepo;

    public  PhrasesRepository(JpaPhrasesRepository jpaRepo){this.jpaRepo = jpaRepo;}

    public Phrases findById(long phrasesId) {
        return jpaRepo.findById(phrasesId).orElseThrow();
    }

    public List<Phrases> findAll() {
        return (List<Phrases>) jpaRepo.findAll();
    }
}
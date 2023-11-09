package com.example.backend.phrases;

import com.example.backend.phrases.models.Phrases;
import com.example.backend.phrases.repos.PhrasesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhrasesService {
    private final PhrasesRepository repo;

    public PhrasesService(PhrasesRepository repo){
        this.repo = repo;
    }

    public Phrases getPhrasesById(long phasesId){
        return repo.findById(phasesId);
    }

    public List<Phrases> getAllPhrases(){
        return repo.findAll();
    }
}
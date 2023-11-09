package com.example.backend.user;

import com.example.backend.phrases.models.Phrases;
import com.example.backend.phrases.repos.PhrasesRepository;
import com.example.backend.user.model.PhraseDto;
import com.example.backend.user.model.SavedPhrases;
import com.example.backend.user.model.UserName;
import com.example.backend.user.model.UserNameDto;
import com.example.backend.user.repo.SavedPhrasesRepository;
import com.example.backend.user.repo.UserNameRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {

    private final UserNameRepository repo;
    private final PhrasesRepository phrasesRepo;

    private final SavedPhrasesRepository savedPhrasesRepo;

    public UserService(UserNameRepository repo,
                       PhrasesRepository phrasesRepo,
                      SavedPhrasesRepository savedPhrasesRepo){
        this.repo = repo;
        this.phrasesRepo = phrasesRepo;
        this.savedPhrasesRepo = savedPhrasesRepo;
    }

    public UserName createUserName(UserNameDto dto){
        UserName newUser = new UserName();
        newUser.setUserName(dto.userName());
        return repo.saveUsername(newUser);
    }

    public UserName findUser(String userId){
        return repo.findById(userId);
    }

    public void addPhraseToUser(String userId, String phraseId){
        UserName user = repo.findById(userId);
        Phrases phrase = phrasesRepo.findById(Long.parseLong(phraseId));
        repo.addPhrase(userId,phrase);
    }

    public List<PhraseDto> mapToDto(List<Phrases> phrases){
        return phrases.stream().map(phr -> {
                return new PhraseDto(
                        String.valueOf(phr.getId())
                );

        }).toList();
    }

    public List<SavedPhrases> getAllPhrases(String userId){
        return repo.getSavedPhrases(userId);
    }

    public void deleteASavedPhrase(String savedId){
        /*List<SavedPhrases> savedPhrases = repo.getSavedPhrases(userId);
        savedPhrases.removeIf(phrase -> phrase.getId().equals(savedId.getId()));
        repo.saveSavedPhrases(userId, savedPhrases);*/
        savedPhrasesRepo.deleteASavedPhrase(savedId);

    }
}
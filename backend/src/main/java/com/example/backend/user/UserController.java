package com.example.backend.user;

import com.example.backend.phrases.models.Phrases;
import com.example.backend.user.model.PhraseDto;
import com.example.backend.user.model.SavedPhrases;
import com.example.backend.user.model.UserName;
import com.example.backend.user.model.UserNameDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;


@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    private final UserService service;
    String userId;

    public UserController(UserService service) {
        this.service = service;
    }
    @PostMapping
    public ResponseEntity<UserName> createUserName(@RequestBody UserNameDto userNameDto){
        UserName newUser = service.createUserName(userNameDto);
        newUser.setUserName(userNameDto.userName());
        userId = newUser.getId();
        return ResponseEntity.created(URI.create("/users/" + newUser.getId())).body(newUser);
    }

   @PostMapping("/{userid}/save")
    public void addSavedPhrase(@PathVariable String userid, @RequestBody PhraseDto savedPhrase){
      service.addPhraseToUser(userid ,savedPhrase.phraseId());
    }

    @GetMapping("/{userid}/save")
    public ResponseEntity<List<SavedPhrases>> getAllPhrases(@PathVariable String userid){
        List<SavedPhrases> allPhrases = service.getAllPhrases(userid);
        return ResponseEntity.ok().body(allPhrases);
    }

    @DeleteMapping("/{userid}/save/{savedId}")
    public ResponseEntity<String> deleteSavedPhrase(@PathVariable String userid, @PathVariable String savedId) {
        try {
            SavedPhrases saved = service.getAllPhrases(userId).stream()
                    .filter(savedPhrases -> savedPhrases.getId().equals(savedId))
                    .findFirst()
                    .orElseThrow(NoSuchElementException::new);
            service.deleteASavedPhrase(savedId);
            return ResponseEntity.ok().body("Successfully deleted the saved phrase.");
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }


}
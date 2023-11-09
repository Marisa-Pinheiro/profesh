package com.example.backend.phrases;

import com.example.backend.phrases.models.Phrases;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class PhrasesController {

    private final PhrasesService service;

    public PhrasesController(PhrasesService service){
        this.service = service;
    }

    @GetMapping("/phrases")
    public ResponseEntity<List<Phrases>> getAllPhrases(){
        List<Phrases> allPhrases = new ArrayList<>(service.getAllPhrases());
        return ResponseEntity.ok().body(allPhrases);
    }
}
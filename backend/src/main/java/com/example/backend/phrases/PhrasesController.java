package com.example.backend.phrases;

import com.example.backend.phrases.models.Phrases;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

@Controller
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
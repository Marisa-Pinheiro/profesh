package com.example.backend.user.repo;

import com.example.backend.user.model.SavedPhrases;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface JpaSavedPhrasesRepository extends CrudRepository<SavedPhrases,String> {

}
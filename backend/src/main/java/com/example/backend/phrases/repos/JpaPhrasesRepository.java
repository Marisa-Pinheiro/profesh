package com.example.backend.phrases.repos;

import com.example.backend.phrases.models.Phrases;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface JpaPhrasesRepository extends CrudRepository<Phrases, Long> {}
package com.example.backend.phrases.repos;

import com.example.backend.phrases.models.Phrases;
import org.springframework.data.repository.CrudRepository;

public interface JpaPhrasesRepository extends CrudRepository<Phrases, Long> {}
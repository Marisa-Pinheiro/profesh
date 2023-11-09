package com.example.backend.user.repo;

import com.example.backend.user.model.UserName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaUserNameRepository extends CrudRepository<UserName, String> {
}
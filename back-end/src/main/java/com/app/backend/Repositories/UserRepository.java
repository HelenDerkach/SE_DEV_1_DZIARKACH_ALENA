package com.app.backend.Repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import com.app.backend.Entities.User;
import org.springframework.data.repository.query.Param;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends PagingAndSortingRepository<User, Integer> {
    @Query(value = "select case when (count(u) > 0)  then true else false end from User u where u.email = :email")
    boolean findUserByEmail(@Param("email") String email);
}

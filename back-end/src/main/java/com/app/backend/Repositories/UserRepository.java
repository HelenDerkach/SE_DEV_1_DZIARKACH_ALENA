package com.app.backend.Repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.app.backend.Entities.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends PagingAndSortingRepository<User, Integer> {

}

package com.app.backend.Repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.app.backend.Entities.Role;

public interface RoleRepository extends PagingAndSortingRepository<Role, Integer> {
}

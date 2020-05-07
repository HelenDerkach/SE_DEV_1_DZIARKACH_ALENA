package com.app.backend.Services;
import com.app.backend.Entities.User;
import com.app.backend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user){
        try{
            if (!userRepository.findUserByEmail(user.getEmail())){
                return userRepository.save(user);
            }
            else {
                throw new RuntimeException("user with this email already exists");
            }
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Iterable<User> getAll(){
        try{
            return userRepository.findAll();
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public Optional<User> getUserById(Integer id){
        try{
            return userRepository.findById(id);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public User updateUser(User user){
        return userRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException("User with id "+ user.getId() +" was not found"));
    }
}

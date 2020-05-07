package com.app.fapi.Services;

import com.app.fapi.Entities.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class UserService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public UserService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

//    public User createUser(User user){
//        try{
//            if (!userRepository.findUserByEmail(user.getEmail())){
//                return userRepository.save(user);
//            }
//            else {
//                throw new RuntimeException("user with this email already exists");
//            }
//        }
//        catch(Exception ex){
//            throw ex;
//        }
//    }

    public User[] getAll(){
        try{
            return this.restTemplate.getForObject(backendUrl + "/users/all", User[].class);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public User login(User user){
        try{
            return this.restTemplate.getForObject(backendUrl + "/users/" + user.getId(), User.class);
        }
        catch(Exception ex){
            throw ex;
        }
    }

//    public Optional<User> getUserById(Integer id){
//        try{
//            return userRepository.findById(id);
//        }
//        catch(Exception ex){
//            throw ex;
//        }
//    }
//
//    public User updateUser(User user){
//        return userRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException("User with id "+ user.getId() +" was not found"));
//    }
}

package com.app.fapi.Services;

import com.app.fapi.Entities.LoginForm;
import com.app.fapi.Entities.Role;
import com.app.fapi.Entities.User;
import com.app.fapi.Entities.UserView;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;


@Service
public class UserService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;

    public UserService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    public UserView createUser(User newUser){
        try{
            newUser.setRole(new Role(1, "user"));
            newUser = this.restTemplate.postForObject(backendUrl + "/users/registration", newUser, User.class);
            return UserView.builder()
                    .id(newUser.getId())
                    .firstName(newUser.getFirstName())
                    .lastName(newUser.getLastName())
                    .email(newUser.getEmail())
                    .phone(newUser.getPhone()).build();
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public User[] getAll(){
        try{
            return this.restTemplate.getForObject(backendUrl + "/users/all", User[].class);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public UserView login(LoginForm loginForm){
        try{
            User loggedUser = User.builder()
                    .email(loginForm.getEmail())
                    .password(loginForm.getPassword()).build();
            loggedUser = this.restTemplate.postForObject(backendUrl + "/users/authentication", loggedUser, User.class);
            return UserView.builder()
                    .id(loggedUser.getId())
                    .firstName(loggedUser.getFirstName())
                    .lastName(loggedUser.getLastName())
                    .email(loggedUser.getEmail())
                    .phone(loggedUser.getPhone()).build();
        }
        catch(Exception ex){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Incorrect username or password", ex
            );
        }
    }

//    public User updateUser(User user){
//        return userRepository.findById(user.getId()).orElseThrow(() -> new RuntimeException("User with id "+ user.getId() +" was not found"));
//    }
}

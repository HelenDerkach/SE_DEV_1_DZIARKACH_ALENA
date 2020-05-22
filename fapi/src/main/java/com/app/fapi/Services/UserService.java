package com.app.fapi.Services;

import com.app.fapi.Entities.Role;
import com.app.fapi.Entities.User;
import com.app.fapi.Entities.UserView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;


@Service("UserService")
public class UserService implements UserDetailsService {
    @Value("${backend.url}")
    private String backendUrl;

    private final RestTemplate restTemplate;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserService(RestTemplateBuilder restTemplateBuilder, BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.restTemplate = restTemplateBuilder.build();
        this.bCryptPasswordEncoder =bCryptPasswordEncoder;
    }

    public User findByEmail(String email){
        return this.restTemplate.getForObject(backendUrl + "/users/email/" + email, User.class);
    }

//    public UserView createUser(User newUser){
//        try{
//            newUser.setRole(new Role(1, "user"));
//            newUser = this.restTemplate.postForObject(backendUrl + "/users/registration", newUser, User.class);
//            return UserView.builder()
//                    .id(newUser.getId())
//                    .firstName(newUser.getFirstName())
//                    .lastName(newUser.getLastName())
//                    .email(newUser.getEmail())
//                    .phone(newUser.getPhone()).build();
//        }
//        catch(Exception ex){
//            throw ex;
//        }
//    }

    public List<User> getAll(){
        try{
            User[] usersResponse = this.restTemplate.getForObject(backendUrl + "/users/all", User[].class);
            return usersResponse == null ? Collections.emptyList() : Arrays.asList(usersResponse);
        }
        catch(Exception ex){
            throw ex;
        }
    }

    public User save(User user) {
        user.setRole(new Role(1, "user"));
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return this.restTemplate.postForEntity(backendUrl + "/users/new", user, User.class).getBody();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole().getName().toUpperCase()));
        return authorities;
    }
}

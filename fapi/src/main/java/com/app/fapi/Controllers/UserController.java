package com.app.fapi.Controllers;

import com.app.fapi.Entities.User;
import com.app.fapi.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(path="/api/users")
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PreAuthorize("hasRole('admin')")
  @GetMapping
  public List<User> getAllUsers(){
    return userService.getAll();
  }

  @GetMapping("/login/{email}")
  public User getUserByLogin(@PathVariable String email) {
    return userService.findByEmail(email);
  }

  @PreAuthorize("isAuthenticated()")
  @GetMapping("/current")
  public User getCurrentUser() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    User user = userService.findByEmail(((org.springframework.security.core.userdetails.User)authentication.getPrincipal()).getUsername());
    System.out.println(user);
    return user;
  }

  @PreAuthorize("isAnonymous()")
  @RequestMapping(value="/signup", method = RequestMethod.POST, produces = "application/json")
  public User saveUser(@RequestBody User user){
    return userService.save(user);
  }
}

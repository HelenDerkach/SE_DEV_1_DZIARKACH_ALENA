package com.app.backend.Controllers;

import com.app.backend.Entities.User;
import com.app.backend.Repositories.UserRepository;
import com.app.backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/users")
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<User> getAllUsers() {
    return userService.getAll();
  }

  @GetMapping(path="/{id}")
  public @ResponseBody Optional<User> getUserById(@PathVariable String id) {
    return userService.getUserById(Integer.parseInt(id));
  }

  @PostMapping(path="/authentication")
  public @ResponseBody Optional<User> authenticateUser(@RequestBody User user) {
    return userService.authenticateUser(user);
  }

  @PostMapping(path="/registration")
  public @ResponseBody User addNewUser(@RequestBody User user) {
    return userService.createUser(user);
  }
}

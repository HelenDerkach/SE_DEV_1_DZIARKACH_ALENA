package com.app.fapi.Controllers;

import com.app.fapi.Entities.LoginForm;
import com.app.fapi.Entities.User;
import com.app.fapi.Entities.UserView;
import com.app.fapi.Services.UserService;
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
  public @ResponseBody User[] getAllUsers() {
    return userService.getAll();
  }

  @PostMapping(path="/authentication")
  public @ResponseBody UserView login(@RequestBody LoginForm loginForm) {
    return userService.login(loginForm);
  }

  @PostMapping(path="/registration")
  public @ResponseBody UserView addNewUser(@RequestBody User user) {
    return userService.createUser(user);
  }
}

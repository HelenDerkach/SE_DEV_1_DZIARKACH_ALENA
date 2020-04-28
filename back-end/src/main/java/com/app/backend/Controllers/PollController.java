package com.app.backend.Controllers;

import com.app.backend.Entities.Poll;
import com.app.backend.Repositories.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

@Controller
@RequestMapping(path="/polls")
public class PollController {
    @Autowired
    private PollRepository pollRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Poll> getAllPolls() {
        return pollRepository.findAll();
    }
}

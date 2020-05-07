package com.app.backend.Controllers;

import com.app.backend.Entities.Poll;
import com.app.backend.Repositories.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@Controller
@RequestMapping(path="/polls")
public class PollController {
    @Autowired
    private PollRepository pollRepository;

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody Optional<Poll> getPollById(@PathVariable String id)
    { return pollRepository.findById(Integer.parseInt(id)); }

    @PostMapping(path = "/new")
    public @ResponseBody Poll createPoll(@RequestBody Poll poll){
        return pollRepository.save(poll);
    }

    @PutMapping(path = "/{id}")
    public @ResponseBody Poll updatePoll(@RequestBody Poll poll)
    {
        if(pollRepository.existsById(poll.getId())){
            return pollRepository.save(poll);
        }
        else return null;// TODO error handler
    }
}

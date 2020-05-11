package com.app.fapi.Controllers;

import com.app.fapi.Entities.Poll;
import com.app.fapi.Services.PollService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/polls")
public class PollController {
    private PollService pollService;

    @Autowired
    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    @GetMapping(path = "/all/{id}")
    public @ResponseBody Poll[] getAllPollsByUserId(@PathVariable String id) {
        return pollService.getUserPolls(Integer.parseInt(id));
    }

    @GetMapping(path = "/published/userId={id}/pageNumber={pageNumber}")
    public @ResponseBody Poll[] getPublishedPagesByUserId(@PathVariable(name="id") String id, @PathVariable(name="pageNumber") String pageNumber) {
        return pollService.getPublishedPagesByUserId(Integer.parseInt(id),Integer.parseInt(pageNumber));
    }

    @GetMapping(path = "/all/{id}/count")
    public @ResponseBody Integer getAllPollsByUserIdCount(@PathVariable String id) {
        return pollService.getUserPollsCount(Integer.parseInt(id));
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody Poll getPollById(@PathVariable String id)
    { return pollService.getPollById(Integer.parseInt(id)); }

    @PostMapping(path = "/new")
    public @ResponseBody Poll createPoll(@RequestBody Poll poll){
        return pollService.save(poll);
    }

}

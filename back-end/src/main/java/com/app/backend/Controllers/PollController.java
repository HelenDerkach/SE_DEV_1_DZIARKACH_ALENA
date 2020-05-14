package com.app.backend.Controllers;

import com.app.backend.Entities.PagingResponse;
import com.app.backend.Entities.Poll;
import com.app.backend.Repositories.PollRepository;
import com.app.backend.Repositories.UserRepository;
import com.app.backend.Services.PollService;
import com.app.backend.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(path="/polls")
public class PollController {
    private PollService pollService;

    @Autowired
    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Poll> getAllPolls() {
        return pollService.getAllPolls();
    }

    @GetMapping(path = "/all/{id}")
    public @ResponseBody Iterable<Poll> getAllUserPolls(@PathVariable String id) {
        return pollService.getPollsByUserId(Integer.parseInt(id));
    }

    @GetMapping
    public @ResponseBody Optional<Poll> getPollByUrl(@RequestParam(value="url") String url){
        return pollService.getPollByUrl(url);
    }

    @GetMapping(path = "/published/userId={id}/pageNumber={pageNumber}")
    public @ResponseBody PagingResponse findPublishedPagesByUserId(@PathVariable String id, @PathVariable String pageNumber) {
        return pollService.findPublishedPagesByUserId(Integer.parseInt(id), Integer.parseInt(pageNumber));
    }

    @GetMapping(path = "/drafts/userId={id}/pageNumber={pageNumber}")
    public @ResponseBody PagingResponse findDraftsPagesByUserId(@PathVariable String id, @PathVariable String pageNumber) {
        return pollService.findDraftsPagesByUserId(Integer.parseInt(id), Integer.parseInt(pageNumber));
    }

    @GetMapping(path = "/{id}")
    public @ResponseBody Optional<Poll> getPollById(@PathVariable String id)
    { return pollService.getPollById(Integer.parseInt(id)); }

    @PostMapping(path = "/new")
    public @ResponseBody Poll createPoll(@RequestBody Poll poll){
        return pollService.save(poll);
    }
//
//    @PutMapping(path = "/{id}")
//    public @ResponseBody Poll updatePoll(@RequestBody Poll poll)
//    {
//        if(pollRepository.existsById(poll.getId())){
//            return pollRepository.save(poll);
//        }
//        else return null;// TODO error handler
//    }
}

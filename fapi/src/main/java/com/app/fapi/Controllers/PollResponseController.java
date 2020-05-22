package com.app.fapi.Controllers;

import com.app.fapi.Entities.ChartDataResponse;
import com.app.fapi.Entities.PollResponse;
import com.app.fapi.Services.PollResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/pollResponses")
public class PollResponseController {
    private PollResponseService pollResponseService;

    @Autowired
    public PollResponseController(PollResponseService pollResponseService){
        this.pollResponseService = pollResponseService;
    }

    @PostMapping (path = "/new")
    public @ResponseBody PollResponse newPollResponse(@RequestBody PollResponse pollResponse){
        return pollResponseService.newPollResponse(pollResponse);
    }

    @GetMapping(path = "/{id}/count")
    public @ResponseBody Integer getPollResponseCount(@PathVariable String id){
        return pollResponseService.getPollResponseCount(Integer.parseInt(id));
    }

    @GetMapping(path = "/{id}/averageTime")
    public @ResponseBody Double getPollResponseAverageTime(@PathVariable String id){
        return pollResponseService.getPollResponseAverageTime(Integer.parseInt(id));
    }
}

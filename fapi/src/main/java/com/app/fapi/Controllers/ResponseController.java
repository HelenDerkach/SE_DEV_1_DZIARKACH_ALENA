package com.app.fapi.Controllers;

import com.app.fapi.Entities.ChartDataResponse;
import com.app.fapi.Entities.PagingResponse;
import com.app.fapi.Services.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/responses")
public class ResponseController {
    private ResponseService responseService;

    @Autowired
    public ResponseController(ResponseService responseService){
        this.responseService = responseService;
    }

    @GetMapping(path="/data/text/{id}/pageNumber={pageNumber}")
    public @ResponseBody PagingResponse getTextQuestionDataByQuestionId(@PathVariable String id, @PathVariable String pageNumber){
        return responseService.getTextQuestionDataByQuestionId(Integer.parseInt(id),Integer.parseInt(pageNumber));
    }

    @GetMapping(path="/data/chart/{id}")
    public @ResponseBody ChartDataResponse[] getPieDataByQuestionId(@PathVariable String id){
        return responseService.getPieDataByQuestionId(Integer.parseInt(id));
    }
}

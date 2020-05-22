package com.app.backend.Services;

import com.app.backend.Entities.PagingResponse;
import com.app.backend.Entities.ChartDataResponse;
import com.app.backend.Entities.Response;
import com.app.backend.Repositories.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ResponseService {
    private ResponseRepository responseRepository;

    @Autowired
    public ResponseService(ResponseRepository responseRepository){
        this.responseRepository = responseRepository;
    }

    public PagingResponse getTextQuestionDataByQuestionId(Integer id, Integer pageNumber) {
        Pageable page = PageRequest.of(pageNumber, 6);
        Page<Response> resultPage = responseRepository.findAllByQuestionId(id, page);
        return PagingResponse.builder().data(resultPage.getContent()).total(resultPage.getTotalElements()).build();
    }

    public ChartDataResponse[] getPieDataByQuestionId(Integer id) {
        Object[][] data = responseRepository.getResponsesWithCount(id);
        ChartDataResponse[] result = new ChartDataResponse[data.length];
        int i = 0;
        for (Object[] obj : data) {
            result[i] = ChartDataResponse.builder().answer((String)obj[0]).count(((Number)obj[1]).intValue()).build();
            i++;
        }
        return result;
    }
}

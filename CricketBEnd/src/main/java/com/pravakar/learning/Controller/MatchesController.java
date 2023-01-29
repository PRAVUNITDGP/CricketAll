package com.pravakar.learning.Controller;


import com.pravakar.learning.ElasticEntity.MatchesInfo;
import com.pravakar.learning.service.MatchesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/matches")
public class MatchesController {

    private final MatchesService service ;

    @Autowired
    public MatchesController(MatchesService matchserv) {
        this.service = matchserv;
    }
    @PostMapping
    private void save(@RequestBody final MatchesInfo matches){
        service.save(matches);
    }
    @GetMapping("/{id}")
    private MatchesInfo findById(@PathVariable final Integer id){
        return service.findById(id);
    }

}

package com.pravakar.learning.service;

import com.fasterxml.jackson.databind.deser.DataFormatReaders;
import com.pravakar.learning.ElasticEntity.MatchesInfo;
import com.pravakar.learning.repositories.MatchesRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchesService {
    private final MatchesRepositories repositories ;

    @Autowired
    public MatchesService(MatchesRepositories repositories){
        this.repositories = repositories;
    }

    public void save(final MatchesInfo info){
        repositories.save(info);
    }

    


    public MatchesInfo findById(final Integer id){
        return repositories.findById(id).orElse(null);
    }

}

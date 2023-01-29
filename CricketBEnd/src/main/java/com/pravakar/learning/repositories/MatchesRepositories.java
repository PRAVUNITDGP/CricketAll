package com.pravakar.learning.repositories;

import com.pravakar.learning.ElasticEntity.MatchesInfo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchesRepositories extends ElasticsearchRepository<MatchesInfo,Integer> {


}

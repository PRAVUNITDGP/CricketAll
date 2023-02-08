package com.pravakar.learning.ElasticEntity;

import com.pravakar.learning.helper.ElasticSearchIndices;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.util.Date;
import java.util.List;

@Document(indexName = ElasticSearchIndices.MATCH_INDEX)
public class MatchesInfo {

    /*
        id,city,date,player_of_match,venue,neutral_venue,team1,team2,toss_winner,toss_decision,winner,result,result_margin,eliminator,method,umpire1,umpire2
        ID,City,Date,Season,MatchNumber,Team1,Team2,Venue,TossWinner,TossDecision,SuperOver,WinningTeam,WonBy,Margin,method,Player_of_Match,Team1Players,Team2Players,Umpire1,Umpire2

     */
    @Id
    @Field(type = FieldType.Integer , name = "id")
    public Integer id ;
    @Field(type = FieldType.Text, name = "city")
    public String city ;
    @Field(type = FieldType.Date, name = "date")
    public Date date ;
    @Field(type = FieldType.Integer,name = "season")
    public Integer season  ;
    @Field(type = FieldType.Integer,name = "matchNo")
    public int matchNo;

    @Field(type = FieldType.Text, name = "teamOne")
    public String teamOne;
    @Field(type = FieldType.Text, name = "teamTwo")
    public String teamTwo;
    @Field(type = FieldType.Text, name = "venue")
    public String venue;
    @Field(type = FieldType.Text, name = "tossWin")
    public String tossWin;
    @Field(type = FieldType.Text, name = "tossDecision")
    public String tossDecision;
    @Field(type = FieldType.Text, name = "winner")
    public String winner;
    @Field(type = FieldType.Text, name = "wonBy")
    public String wonBy;
    @Field(type = FieldType.Integer, name = "margin")
    public Integer margin;
    @Field(type = FieldType.Text, name = "method")
    public Integer method;
    @Field(type = FieldType.Text, name = "playerOfMatch")
    public String playerOfMatch ;
    @Field(type = FieldType.Nested, includeInParent = true,name = "teamOnePlayers")
    public List<String> teamOnePlayers;
    @Field(type = FieldType.Nested , includeInParent = true , name = "teamTwoPlayers")
    public List<String> teamTwoPlayers ;
    @Field(type = FieldType.Text, name = "umpireOne")
    public String umpireOne ;
    @Field(type = FieldType.Text, name = "umpireTwo")
    public String umpireTwo;

}

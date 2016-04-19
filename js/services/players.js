// A Service that provides functions for adding and removing players and list handling
angular.module('app').factory('playersService', function(){
    var players = {};
    var pairs = {};
    var results = {};
        
    players.list = [];
    players.pairs = [];
    players.results = [];
    
    // Add a player onto the list
    players.add = function(player){
        players.list.push({ id: players.list.length, text: player });
        };
        
    // Remove a player from the list
    players.remove = function(index){
        players.list.splice(index, 1);
        };     
  
    // Display the list
    players.display = function(){
        return players.list;
        };
    
    // A function to create a randomized array    
    function randOrd(){
        return (Math.round(Math.random())-0.5); }
    
    //  Create pairs and store them in to a new array with unique index
    players.pairings = function(){
        //console.log("hello");
        listLen = players.list.length;
        var matchId = 0;
        for (var i=0; i < listLen; i++){
            //console.log(player.list[i]);
            for (var j=i+1; j < listLen; j++){
                players.pairs.push({id: matchId, player1: players.list[i], player2: players.list[j]} )
                matchId = matchId + 1;
            }
        }
        // Randomize matches
        players.pairs.sort(randOrd); 
        //console.log(players.pairs);
        return players.pairs;

        };
        
    // Add a result onto the list
    players.addResult = function(result){
        //tähän logiikkaa tuloksen parseroimiseksi argumentti-stringistä muotoa: 1-1
        //pitää siis päätellä kumpi voitti ja saa 2p tai tasapeli molemmille 1p (ja jatkoaikavoitto toiselle 2p, toiselle 1p)
        //pitää myös ylläpitää maalieroa 
        //ylläpidetään dynaamista tuloslistaa ja tämä metodi palauttaa päivitetyn arrayn
        players.results.push({ id: players.list.length, text: player });
        };
        
    return players;
    });
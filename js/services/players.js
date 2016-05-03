// A Service that provides functions for adding and removing players and list handling
angular.module('app').factory('playersService', function(){
    var players = {}; // Names of players
    var pairs = {}; // Games, like John vs. Bill
    var results = {}; // Results of played games
    var standingCreated = 0; // A flag for intializing the standings array
    var parsedResult = {}; // Variable for handling result
    
    players.list = [];
    players.pairs = [];
    players.results = [];
    players.parsedResult = [];
    
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
        return (Math.round(Math.random())-0.5);
        }
    
    //  Create pairs and store them in to a new array with an unique index
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
    
    // Function implements an empty array (standings) which contains players and earned points
    function createStandings(){
        var standings = {};
        players.standings = [];
        for (var i=0; i < listLen; i++){
            players.standings.push({id: i, text: players.list[i], points: 0})
        }
        return players.standings;
        }
        
    // Add a result onto the standings
    players.addResult = function(result){
        // This if-statement declares the standing array with initial values. 
        if (standingCreated == 0) {
            players.standings = createStandings();
            standingCreated = 1;
        }
        console.log(result);
        
        var playerList = [];        
        var standingArray = [];

        // A loop for parsering the results of games
        resultLen = Object.keys(result).length;
        for (var x=0; x < resultLen; x++) {
            var newResult = result[x];
            newResult = newResult.split("-");
            
            // If player1 wins aka. result is in format, like 4-2 
            if (newResult[0] > newResult[1]) {
          
                playerVal = players.pairs[x].player1;
                playerVal = playerVal.text;
                value = playerList.indexOf(playerVal); // Checks if the player already exists on the standings, returns -1 if false.
                             
                if (value === -1) {
                    // If player gets his first 2 points, his name and points are added on the standings
                    standingArray.push({name: playerVal, points: 2});
                    playerList.push(playerVal);
                                                        
                    console.log(playerVal);
                    console.log(playerList);
                    console.log(standingArray);
                }
                else {
                    // If player has already earned points, his record will be updated on the standings
                    for (var y in standingArray){
                        if (standingArray[y].name == playerVal) {
                            standingArray[y].points = standingArray[y].points + 2;
                            break;
                        }
                    }
                }               
            }            
            // If player2 wins aka. result is in format, like 2-4
            else if (newResult[0] < newResult[1]) {
                
                playerVal = players.pairs[x].player2;
                playerVal = playerVal.text;
                value = playerList.indexOf(playerVal); // Checks if the player already exists on the standings, returns -1 if false.
                             
                if (value === -1) {
                    //mikali pelaaja saa ensimmaiset pisteet, niin listataan tulostaulukkoon. Muuten else, jossa paivitetaan pistetilanne.
                    standingArray.push({name: playerVal, points: 2});
                    playerList.push(playerVal);
                                                        
                    console.log(playerVal);
                    console.log(playerList);
                    console.log(standingArray);
                }
                else {
                    // If player has already earned points, his record will be updated on the standings
                    for (var y in standingArray){
                        if (standingArray[y].name == playerVal) {
                            standingArray[y].points = standingArray[y].points + 2;
                            break;
                        }
                    }
                }                
            }
            
            else {
                console.log("it's a draw!");                
            }                            
        }
         
        console.log("otteluparit: ", players.pairs);
        console.log("tulos: ", result);       
        console.log("sarjataulukko: ", players.standings);      
       
        
        //tähän logiikkaa tuloksen parseroimiseksi argumentti-stringistä muotoa: 1-1
        //pitää siis päätellä kumpi voitti ja saa 2p tai tasapeli molemmille 1p (ja jatkoaikavoitto toiselle 2p, toiselle 1p)
        //pitää myös ylläpitää maalieroa 
        //ylläpidetään dynaamista tuloslistaa ja tämä metodi palauttaa päivitetyn arrayn
        //console.log(result);
        //console.log(players.pairs);

        };
        
    return players;
    });
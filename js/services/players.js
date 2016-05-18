// A Service that provides functions for adding and removing players and list handling
angular.module('app').factory('playersService', function(){
    var players = {}; // Names of players
    var pairs = {}; // Games, like John vs. Bill
    var results = {}; // Results of played games
    
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
            
    // Function displays the standings and calls a function that creates the standing array with intial values (see the function below)
    players.displayStandings = function(){
        players.standings = createStandings();
        return players.standings;
        };
    
    // Function implements an empty array (standings) which contains players and earned points
    function createStandings(){
        var standings = {};
        players.standings = [];
        for (var i=0; i < listLen; i++){
            players.standings.push({id: i, name: players.list[i], scoredGoals: 0, allowedGoals: 0, goalDiff: 0, points: 0})
        }
        return players.standings;
        }
        
    // Function updates players' scored goals, allowed goals and goal difference on the standings array
    function updateGoals(newResult, player1, player2) {
        
        console.log(player1);
        console.log(player2);
              
        for (var z in players.standings){
            if (players.standings[z].name.text == player1) {
                players.standings[z].scoredGoals = players.standings[z].scoredGoals + parseInt(newResult[0]);
                players.standings[z].allowedGoals = players.standings[z].allowedGoals + parseInt(newResult[1]);
                players.standings[z].goalDiff = players.standings[z].scoredGoals - players.standings[z].allowedGoals;
                break;
                }
            }
                
        for (var z in players.standings){
            if (players.standings[z].name.text == player2) {
                players.standings[z].scoredGoals = players.standings[z].scoredGoals + parseInt(newResult[1]);
                players.standings[z].allowedGoals = players.standings[z].allowedGoals + parseInt(newResult[0]);
                players.standings[z].goalDiff = players.standings[z].scoredGoals - players.standings[z].allowedGoals;
                break;
                } 
            }         
        return;
        }
    
    // Function updates players' points on the tandings array 
    function updatePoints(player, points) {                
 
         for (var y in players.standings){
            if (players.standings[y].name.text == player) {
                players.standings[y].points = players.standings[y].points + points;
                break;
                }         
            }         
        return;
        }
        
    // Add a result onto the standings
    players.addResult = function(result){
        console.log(result);

        // A loop for parsering the results of games
        resultLen = Object.keys(result).length;
        for (var x=0; x < resultLen; x++) {
            var newResult = result[x];
            newResult = newResult.split("-");
            
            // Update SG, GA and GDIFF per player on the standings
            player1 = players.pairs[x].player1.text;
            player2 = players.pairs[x].player2.text;            
            updateGoals(newResult, player1, player2);          
 
            // If player1 wins aka. result is in format 4-2 
            if (newResult[0] > newResult[1]) {          
                playerVal = players.pairs[x].player1.text;              
                updatePoints(playerVal, 2);           
            }
            
            // If player2 wins aka. result is in format 2-4
            else if (newResult[0] < newResult[1]) {                
                playerVal = players.pairs[x].player2.text;      
                updatePoints(playerVal, 2);        
            }
            
            // In case of a draw, result is in format 4-4 both players earn 1 point
            else {
                playerVal = players.pairs[x].player1.text;     
                updatePoints(playerVal, 1);
  
                playerVal = players.pairs[x].player2.text;           
                updatePoints(playerVal, 1);                             
            }                        
            
        }         
        console.log("otteluparit: ", players.pairs);
        console.log("tulos: ", result);       
        console.log("sarjataulukko: ", players.standings);
    
        };        
    return players;
    });
// A Service that provides functions for adding and removing players and stores the list of players
angular.module('app').factory('playersService', function(){
    var players = {};
    
    players.list = [];
    
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
        
    return players;
    });
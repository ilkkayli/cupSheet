// A Service that provides functions for adding and removing players
angular.module('app').factory('players', function(){
    var players = {};
    
    players.list = [];
    
    players.add = function(player){
        players.list.push({ id: players.list.length, text: player });
        };
        
    //Remove player from the list
    players.remove = function(index){
        players.list.splice(index, 1);
        };  
    return players;
    });
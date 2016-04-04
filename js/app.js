var app = angular.module('app', ['ui.bootstrap']);

//STUFF BELOW HAVE BEEN TRANSFERRED INTO SEPARATE FILES UNDER /JS FOLDER


// A Service that provides functions for adding and removing players
/*angular.module('app').factory('players', function(){
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
    });*/

// A Controller for displaying the list of players and also removing players(exposes the list from service to the view)
/*app.controller('ListCtrl', function(players){
    var self = this;
    
    self.players = players.list;
    
    self.removePlayer = function(index){
        players.remove(index);
        }; 
    });*/

// A Controller for injecting players to the list (on the service)
/*app.controller('PostCtrl', function(players){
    var self = this;
    
    self.newPlayer = '';
    
    self.addPlayer = function(player){
        players.add(player);
        self.newPlayer = ''; //Resets the input field with placeholder value
        };
    });*/

/*app.controller('mainController', function($scope){
    
    //Player Name Array
    $scope.players = [];
    
    //Add player to the list (array)
    $scope.addPlayer = function(){
        $scope.players.push({
            name: $scope.playerName
            });
        //Reset input field
        $scope.playerName = "";
        };
    
    //Remove player from the list
    $scope.removePlayer = function(index){
        $scope.players.splice(index, 1)
        };
    });*/



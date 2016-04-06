// A Controller for displaying the list of players and also removing players(exposes the list from service to the view)

// Removes players from the list
app.controller('ListCtrl', function(playersService){
    var self = this;
    
    self.players = playersService.list;
    
    self.removePlayer = function(index){
        playersService.remove(index);
        };        
    });

// Displays the current list
app.controller('DisplayCtrl', function(playersService){
    var self = this;
    
    self.displayPlayers = function(){
        self.playersList = playersService.display();
        //console.log(self.playersList);      
        };
    });
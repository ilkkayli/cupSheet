// Controllers for displaying the list of players and also removing players(exposes the list from service to the view)

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
        console.log(self.playersList);      
        };
    });

// A controller for creating pairs and handling results
app.controller('PairCtrl', function(playersService){
    var self = this;
    
    // Set up pairs
    self.formPairs = function(){
        self.pairsList = playersService.pairings();
        //console.log(self.pairsList);      
        };
    
    // Add a result
    self.addResult = function(result){
        playersService.addResult(result);
        };
        
    // Displays standings
    self.displayStandings = function(){
        self.standings = playersService.displayStandings();
        };                  
    });


  

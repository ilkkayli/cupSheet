// A Controller for injecting players to the list (on the service)
app.controller('PostCtrl', function(players){
    var self = this;
    
    self.newPlayer = '';
    
    self.addPlayer = function(player){
        players.add(player);
        self.newPlayer = ''; //Resets the input field with placeholder value
        };   
    
    });
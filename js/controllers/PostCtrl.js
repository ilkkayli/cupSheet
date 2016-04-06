// A Controller for injecting players to the list (on the service)
app.controller('PostCtrl', function(playersService){
    var self = this;
    
    self.newPlayer = '';
    
    self.addPlayer = function(player){
        playersService.add(player);
        self.newPlayer = ''; //Resets the input field with placeholder value
        };   
    
    });
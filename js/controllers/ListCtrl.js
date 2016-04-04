// A Controller for displaying the list of players and also removing players(exposes the list from service to the view)
app.controller('ListCtrl', function(players){
    var self = this;
    
    self.players = players.list;
    
    self.removePlayer = function(index){
        players.remove(index);
        }; 
    });
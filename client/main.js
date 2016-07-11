

Template.leaderboard.helpers({
	'players':function(){
		return PlayersList.find({},{sort:{score:-1, name:1}});
			},
	'selectedPlay':function(){
			var bD= this._id;
			var cD=Session.get('selectedPlayer');
				if(bD==cD){
					return "selected"
					}
			},
	'selectedPlayer':function(){
				var h=Session.get('selectedPlayer');
				return PlayersList.findOne(h);
				}
				});
Template.leaderboard.events({
	'click .id':function(){
		var playerId= this._id;
		Session.set('selectedPlayer',playerId);
		Session.get('selectedPlayer')
			},
	'click .increment':function(){
		var g=Session.get('selectedPlayer');
		PlayersList.update(g,{$inc:{score:5}});
				},
	'click .decrement':function(){
		var g=Session.get('selectedPlayer');
		PlayersList.update(g,{$inc:{score: -5}});
				},
	'click .remove':function(){
		var n= Session.get('selectedPlayer');
		PlayersList.remove(n);			
				}
				});
Template.addPlayer.events({
	'submit form':function(event){
		event.preventDefault();
		var m= event.target.playerName.value;
		var q=Meteor.userId();
		PlayersList.insert({name:m,score:0, createdBy:q});
		event.target.playerName.value="";
			}
		});
		

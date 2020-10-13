class Player {
  constructor(){
    this.index=null
    this.distance= 0
    this.name=null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//remove the name argument
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({

      'name':this.name,
      'distance':this.distance,
    });
  }

static playerInfo(){
    database.ref("players").once("value",(data)=>{
        allPlayers= data.val();
    })
  }
}

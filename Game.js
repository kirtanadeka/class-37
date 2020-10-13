//hide the form for game state 1
//collect the player detais, display the player details
//update the distance onto the database

class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){

    if(gameState === 0){
      player = new Player();
     var playerCountRef = await database.ref('playerCount').once("value");

     if(playerCountRef.exists()){
       playerCount= playerCountRef.val();
       player.getCount();
     }
     
      form = new Form()
      form.display();
    }
    c1 = createSprite(100,200);
    c2 = createSprite(300,200);
    c3 = createSprite(500,200);
    c4 = createSprite(700,200);
    cars=[c1,c2,c3,c4];
  }

  play(){
    form.hide();
   // textSize(30);
    //text("Game Start!!!!!!!", 120, 100);
    Player.playerInfo();
    if(allPlayers !== undefined){
      var index = 0;
      var x=0;
      var y;
     // var display_position = 130;
      for(var plr in allPlayers ){
        index = index+1;
        x = x+200;
        y = displayHeight- allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;

        if(index === player.index){
          cars[index-1].shapeColor="red";
          camera.position.x=displayWidth/2;
          camera.position.y=cars[index-1].y;
        }
        
         // textSize(15);
         // text(allPlayers[plr].name + ": "+ allPlayers[plr].distance,120,display_position);
        
      }

    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance+= 10;
    player.update();
    
    }
    drawSprites();
  }
}














class Quiz {
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

 start(){
    
      contestant = new Contestant();
      
        contestant.getCount();
      
      question = new Question()
      question.display();
    
  }

  play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allContestants){
        debugger;
        /*
        if(allContestants[plr].answer !== '3'){
          fill ("green");
        }
        else{
          fill("red")
        }
        */
        /*
        if(allContestants[plr] == '3'){
          fill ("green");
        }
        else{
          fill("red")
        }
        */
        /*
        if(allContestants[plr].answer == '3'){
          fill ("red");
        }
        else{
          fill("green")
        }
        */
        /*
        if(allContestants[plr].answer == '3'){
          fill ("green");
        }
        else{
          fill("red")
        }
        */
        display_Answers+=30;
        textSize(20);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
      }
    } 
  }
}

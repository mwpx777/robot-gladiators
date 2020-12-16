
var getPlayerName = function(){
  var name = "";
  while(name === "" || name === null){
    name = prompt('What is your robots name?');
  }
    console.log('Your players name is ' + name);
    return name;
};
//random number logic
var randomNumber = function(){
  var value = Math.floor(Math.random() * 21) + 40;

  return value;
};
//This is an object!!
var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function(){
    this.health +=20;
    this.money -+7;
  },
  upgradeAttack :function(){
    this.attack +=6;
    this.money -=7;
  }
};
//Object end


//This is an object!!
var enemyInfo = [ 
  {
    name: "Flexo",
    attack: randomNumber(12, 14),
    health: 50
  },
  {
    name: "Clamps",
    attack: randomNumber(10, 14),
    health: 50
  },
  {
    name: "Furious George",
    attack: randomNumber(10, 14),
    health:50
  }
];
//Object End

for(var i = 0; i < enemyInfo.length; i++) {
    console.log(enemyInfo[i]);                            //might need obj here
    console.log(i);
    console.log(enemyInfo[i] + " is at " + i + " index"); //might need obj here
  }


 //GAME LOGIC    
var fight = function(enemy) { 
    console.log(enemyInfo.name);
     // repeat and execute as long as the enemy-robot is alive 
    while(enemyInfo.health> 0 && playerInfo.health > 0) {
      
            
            // ask player if they'd liked to fight or run
              var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
          
              // if player picks "skip" confirm and then stop the loop
              if (promptFight === "skip" || promptFight === "SKIP") {
                // confirm player wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
                // if yes (true), leave fight
                if (confirmSkip) {
                  window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                  // subtract money from playerMoney for skipping
                  playerInfo.money = playerInfo.money - 10;
                  window.alert(playerInfo.name + " just lost 10 bucks for skipping the fight");
                  console.log(playerInfo.name, playerInfo.money);
                  break;
                }
              }
          
              // remove enemy's health by subtracting the amount set in the playerAttack variable
              if (promptFight === "FIGHT" || promptFight === "fight"){
                //generate random damage value based on players attack power
                  var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
                  enemyInfo.health = Math.max(0,enemyInfo.health - damage);
                  console.log(playerInfo.name + " damage attack was " + damage);
                  console.log(
                  playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemyInfo.health + ' health remaining.'
                  );}
            
              // check enemy's health
              if (enemyInfo.health <= 0) {
                window.alert(enemyInfo.name + ' has died!');
          
                // award player money for winning
                playerInfo.money = playerInfo.money + 20;
                console.log(playerInfo.money)
                window.alert(playerInfo.name + " has defeated " + enemyInfo.name + " and now has " + playerInfo.money);
               // window.alert(playername + "has defeated" + enemy.name + " now has" + playerMoney);
          
                // leave while() loop since enemy is dead
                break;

              } else {
                window.alert(enemyInfo.name + ' still has ' + enemyInfo.health + ' health left.');
              }
          
              // remove players's health by subtracting the amount set in the enemy.attack variable
              var damage = randomNumber(enemy.attack - 3, enemy.attack);
              playerInfo.health = Math.max(0,playerInfo.health - damage);
              console.log(enemy.name + " damage attack was " + damage);
              console.log(
                enemyInfo.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
              );
          
              // check player's health
              if (playerInfo.health <= 0) {
                window.alert(playerInfo.Name + ' has died!');
                // leave while() loop if player is dead
                break;
              } else {
                window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
                fight();
              }
    }
};
//GAME LOGIC END

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
      window.alert("Great job, you've survived the game! You now have $ " + playerInfo.money + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    fight();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    startGame();
    }
  }
//END GAME END
// SHOP START
var shop = function(){
    
    window.alert(playerInfo.name + " entered the shop.")

    //ask player what they would like to do
    var shopOptionPrompt = window.prompt (
        "Would you like to REFILL your health 20 for $7, UPGRADE your attack 10 for $7, or LEAVE the store? Please choose one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

        switch (shopOptionPrompt){
            case "REFILL":
            case "refill":{
                if (this.money >= 7){
                //refill health 10 for $7
                window.alert("Refill health 20 for $7");
                playerInfo.refillHealth();
                break;

                } else {
                    window.alert("You don't have enough chedder bro!")
                }
                break;}

            case "UPGRADE":
            case "upgrade":{
                if (this.money >= 7){
                //upgrade attack 10 for $7
                window.alert("Upgrade attack 6 for $7");
                playerInfo.upgradeAttack();
                break;}
                

                else{
                    window.alert("You don't have enough chedder bro!")
                }
                break;}
            
            case "LEAVE":
            case "leave":{
                //leave store
                window.alert( playerInfo.name + " left the store.");
                
                //do nothing so function will end
                break;}

            default:
                //player didn't enter valid response
                window.alert("Please choose a valid response.");

                //call shop
                shop();
                break;
        }
    
};
//SHOP END

//START GAME
var startGame = function(){
    //reset player stats
    playerInfo.reset();
    

    for (var i = 0; i < enemyInfo.length; i++) {
      
         if(playerInfo.health > 0){
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
        
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
            console.log(pickedEnemyObj);
        
            // reset enemyInfo.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 50); 
            
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the picked enemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
         
            fight(pickedEnemyObj);
        
            //if we aren't at last enemy in array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                //congratulate player
                window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
                //ask player if they want to go to shop
                var storeConfirm = window.confirm ("The fight is over, would you like to enter the shop?");

                //if yes, take them to the shop
                if (storeConfirm) {
                shop();
                } else {
                fight();
                }
        } 
            else {
                window.alert("You have lost " + playerInfo.name + " in battle! Game Over!");
                window.alert("Peace Out")
                break;
            }
    }
      
            // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
            endGame();
    }
};   
//START GAME END

 //start game when page loads
startGame();








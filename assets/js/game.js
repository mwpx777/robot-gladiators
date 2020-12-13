var playerName = window.prompt("What is your robot's name?");
var playerHealth = 00;
var playerAttack = 100;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);

//array of enemy names, each name is a string
var enemyNames = ["Flexo", "Clamps", "Furious George"];
var enemyHealth = 50;
var enemyAttack = 1;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

 //GAME LOGIC    
var fight = function(enemyName) {
     // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0 && playerHealth > 0) {
            
            
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
                  playerMoney = playerMoney - 10;
                  window.alert(playerName + " just lost 10 bucks for skipping the fight");
                  console.log("playerMoney", playerMoney)
                  break;
                }
              }
          
              // remove enemy's health by subtracting the amount set in the playerAttack variable
              enemyHealth = enemyHealth - playerAttack;
              console.log(
                playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
              );
          
              // check enemy's health
              if (enemyHealth <= 0) {
                window.alert(enemyName + ' has died!');
          
                // award player money for winning
                playerMoney = playerMoney + 20;
                console.log(playerMoney)
                window.alert(playerName + " has defeated " + enemyName + " and now has " + playerMoney);
               // window.alert(playername + "has defeated" + enemyName + " now has" + playerMoney);
          
                // leave while() loop since enemy is dead
                break;

              } else {
                window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
              }
          
              // remove players's health by subtracting the amount set in the enemyAttack variable
              playerHealth = playerHealth - enemyAttack;
              console.log(
                enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
              );
          
              // check player's health
              if (playerHealth <= 0) {
                window.alert(playerName + ' has died!');
                // leave while() loop if player is dead
                break;
              } else {
                window.alert(playerName + ' still has ' + playerHealth + ' health left.');
              }
    }
};
//GAME LOGIC END

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
      window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } 
    else {
      window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
    // restart the game
    startGame();
    } 
    else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
  }
//END GAME END

//START GAME
var startGame = function(){
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
         if(playerHealth > 0){
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
        
            // reset enemyHealth before starting new fight
            enemyHealth = 50;
        
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
        
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
          }
          else {
            window.alert("You have lost " + playerName + " in battle! Game Over!");
            window.alert("Peace Out")
            break;
          }
    }
            // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
            endGame();
};


 //start game when page loads
startGame();

//START GAME END



//SHOP
//var shop = function(){

//}
//SHOP END


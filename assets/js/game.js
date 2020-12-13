var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);

//array of enemy names, each name is a string
var enemyNames = ["Flexo", "Clamps", "Furious George"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

window.alert("Welcome to Robot Gladiators!");
     
var fight = function(enemyName) {
     // repeat and execute as long as the enemy-robot is alive 
    while(enemyHealth > 0 && playerHealth > 0) {
            //money update
            
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
          
for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Flexo";
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators you bitches!");

var fight = function() {
   enemyHealth = enemyHealth-playerAttack;
    console.log(playerName + " attacked " + enemyName + "." + enemyName +  " now has " + enemyHealth + " health remaining.");

    //check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " is wasted.");
      }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
    }

playerHealth = playerHealth-enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName +  " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
    window.alert(playerName + " is wasted");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health remaining.");
    }

  };

  //if (playerHealth > 0) {
    //console.log(playerName + " is still alive!");
  //}

 // if (playerHealth === 0){
   // console.log("this will not run");
 // }

  //else {
      //console.log(playerName = " is WASTED!");
  //}

fight();
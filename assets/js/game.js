var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Flexo";
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome to Robot Gladiators you bitches!");

var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?  Type 'FIGHT' to continue, or 'SKIP' to chicken out.");
    console.log(promptFight);

    if (promptFight === 'FIGHT' || promptFight === 'fight') {
        window.alert("You are one tough son of a bitch!  I like that about you!");
    }
  

    if (promptFight === "fight" || promptFight === "FIGHT") {
        //player attack
        enemyHealth = enemyHealth-playerAttack;
        console.log(playerName + " attacked " + enemyName + "." + enemyName +  " now has " + enemyHealth + " health remaining.");

        //check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is wasted.");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health remaining.");
        }
        //enemy attack
        playerHealth = playerHealth-enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName +  " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " is wasted");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }

    // if player chooses to SKIP
    }else if (promptFight === "SKIP" || promptFight === "skip"){
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to be a wussbag?");
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to be a total wussbag and leave the fight.");
            //subtract money from player
            playerMoney = playerMoney - 2;
            console.log(playerMoney)
            window.alert(playerName + " now has " + playerMoney + " bucks remaining.");
        }
        //if no (false), ask question again about running fight() again
        else {
            window.alert("Smart choice douchebag!");
            fight();
        }

    } else { 
    window.alert("You need to choose a valid response.  Try again dummy!");
    }

}

 

fight();
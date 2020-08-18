var gameData = {
  //basic variables
  varCash: 0.00,
  perPerform: 1.0,
  varPassiveIncome: 0.0,
  varFear: 0.0,
  varContempt: 0.0,
  varClimit:0,
  varClowns:0,
  
  //Clown Purchase Variables
  comedyCost: 20,
  jugglingCost: 125,
  balancingCost: 999,
  
  //Building amounts
  varTent: 0,
  tentCost: 10,
  
  varClownvan: 50,
  vanCost:0,
  
  varMotel: 0,
  motelCost:0,
  
  varClowndo:0,
  clowndoCost: 0
}
//This should load the game properly now
var savegame = JSON.parse(localStorage.getItem("ClownCircus"))
if (savegame !== null) {
  gameData = savegame
}

function updateHTML() {
  if (gameData.varCash >= 0) {
    document.getElementById("currentCash").innerHTML = "Current Cash: $" + ((gameData.varCash).toFixed(2))
    if (gameData.varCash >= 1000) {
      document.getElementById("currentCash").innerHTML = "Current Cash: $" + (((gameData.varCash) / 1000).toFixed(2)) + "K"
      if (gameData.varCash >= 1000000) {
        document.getElementById("currentCash").innerHTML = "Current Cash: $" + (((gameData.varCash) / 1000000).toFixed(2)) + "M"
        if (gameData.varCash >= 1000000000) {
          document.getElementById("currentCash").innerHTML = "Current Cash: $" + (((gameData.varCash) / 1000000000).toFixed(2)) + "B" 
        }
      }
    }
  }
  
  if (gameData.varContempt >= 0){
    document.getElementById("currentContempt").innerHTML = "Clown Contempt: " + ((gameData.varContempt).toFixed(2))
    document.getElementById("currentContempt").style.color = "white";
    if (gameData.varContempt >= 90) {
      document.getElementById("currentContempt").innerHTML = "Clown Contempt: " + ((gameData.varContempt).toFixed(2))
      document.getElementById("currentContempt").style.color = "red";
    }
  }
  
  
  document.getElementById("currentFear").innerHTML = "Audience Fear: " + ((gameData.varFear).toFixed(2))
  
  document.getElementById("currentClimit").innerHTML = "Clowns: " + (gameData.varClowns) + "/" + (gameData.varClimit) 
  
}


function saveGame() {
  localStorage.setItem("ClownCircus", JSON.stringify(gameData))
}

function showDelete() {
  document.getElementById("showDelete").style.visibility= 'visible'
  document.getElementById("showDeleteNevermind").style.visibility = 'visible'
}
function closeDelete() {
  document.getElementById("showDelete").style.visibility = 'hidden'
  document.getElementById("showDeleteNevermind").style.visibility = 'hidden'
}

function permDelete() {
  localStorage.clear("ClownCircus")
  document.getElementById("showDelete").style.visibility = 'hidden'
  document.getElementById("showDeleteNevermind").style.visibility = 'hidden'
  
  //This is to Reset the webpage when you delete your save to prevent confusion
  //Updating store costs
  document.getElementById("comedyCost").innerHTML = "Current cost is: $" + (gameData.comedyCost).toFixed(2)
  
  updateHTML()
}



function perform() {
  gameData.varCash = gameData.varCash + gameData.perPerform
}

//Purchasing function, pass in clownType as selection via button click function storePurchase(var)
//Potential to make this do x10, x100 at later date? Pass in two variables - clownType and amount ???
function clownPurchase(clownType) {
  if (clownType == "comedy") {
    if (gameData.varCash >= gameData.comedyCost) {
      gameData.varCash -= gameData.comedyCost
      gameData.perPerform = gameData.perPerform + 0.5
      gameData.comedyCost *= 1.1
      document.getElementById("comedyCost").innerHTML = "Current cost is: $" + (gameData.comedyCost).toFixed(2)
    }
  }
  if (clownType == "juggling") {
    if (gameData.varCash >= gameData.jugglingCost) {
      gameData.varCash -= gameData.jugglingCost
      gameData.varPassiveIncome += 0.15
      gameData.jugglingCost *= 1.09
      gameData.jugglingCost = (gameData.jugglingCost).toFixed(2)
      gameData.varCash = (gameData.varCash).toFixed(2)
      //put document.getElementById for juggling et al down here
    }
  }
  if (clownType == "balancing") {
    if (gameData.varCash >= gameData.balancingCost) {
      gameData.varCash -= gameData.balancingCost
      gameData.varPassiveIncome += 00
      gameData.balancingCost *= 00
    }
  }
  if (clownType == "animal") {
    if (gameData.varCash >= gameData.animalCost) {
      gameData.varCash -= gameData.animalCost
      gameData.varPassiveIncome += 00
      gameData.animalCost *=00
    }
  }
  //MORE WILL FOLLOW i just got lazy and this is a prototype :)
  
  //Updating the current cash after spending!
}

function upgradePurchase(upgradeType) {
  
}
  
function buildingPurchase(buildType) {
  if (buildType == "") {
    
  }
  
  if (buildType == "") {
    
  }
  
  if (buildType == "") {
    
  }
  
  if (buildType == "") {
    
  }
  
  if (buildType == "") {
    
  }
  
  if (buildType == "") {
    
  }
}

//Per second
var mainGameLoop = window.setInterval(function() {
  //For later use - adds varPassiveIncome to varCash every second
  if (gameData.varPassiveIncome > 0) {
    gameData.varCash = gameData.varCash + gameData.varPassiveIncome
  }
  
  
}, 1000)

//Per 15 seconds
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("ClownCircus", JSON.stringify(gameData))
}, 15000)

//Per tick (12ms)
var updateLoop = window.setInterval(function() {
  updateHTML()
}, 12)

//Debug commands go down below everything
function debugLodesMone(money) {
  gameData.varCash = money
}

var savegame = JSON.parse(localStorage.getItem("ClownCircus"))
if (savegame !== null) {
  gameData = savegame
}

var gameData = {
  //basic variables
  varCash: 0,
  perPerform: 1,
  varPassiveIncome: 0,
  varFear: 0,
  varContempt: 0,
  varClownLimit:0,
  
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

function debugPrintGameData() {
  print(gameData)
}

function perform() {
  gameData.varCash += gameData.perPerform
  document.getElementById("currentCash").innerHTML = "$" + gameData.varCash
}

//Purchasing function, pass in clownType as selection via button click function storePurchase(var)
//Potential to make this do x10, x100 at later date? Pass in two variables - clownType and amount ???
function clownPurchase(clownType) {
  if (clownType == "comedy") {
    if (gameData.varCash >= gameData.comedyCost) {
      gameData.varCash -= gameData.comedyCost
      gameData.perPerform += 0.5
      gameData.comedyCost *= 1.1
      document.getElementById("comedyCost").innerHTML = "Current cost is: $" + gameData.comedyCost
    }
  }
  if (clownType == "juggling") {
    if (gameData.varCash >= gameData.jugglingCost) {
      gameData.varCash -= gameData.jugglingCost
      gameData.varPassiveIncome += 0.15
      gameData.jugglingCost *= 1.09
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


var mainGameLoop = window.setInterval(function() {
  
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("ClownCircus", JSON.stringify(gameData))
}, 15000)

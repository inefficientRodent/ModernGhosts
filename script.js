var gameData = {
  //Cash/player related variables
  varCash: 0.00,
  varAllTimeCash: 0.00,
  perPerform: 1.0,
  
  //Audience related variables
  varFear: 0.0,
  //Clown Anger related variables
  varContempt: 0.0,
  varContemptLimit: 100.0,
  //Clown related variables
  varClimit:0,
  varClowns:0,
  
  //Clown Purchase Variables
  comedyCost: 20,
  comedyOwned:0,
  comedyMult: 1,
  jugglingCost: 800,
  jugglingOwned:0,
  jugglingMult: 1,
  balancingCost: 5000,
  balancingOwned:0,
  balancingMult: 1,
  animalCost: 25000,
  animalOwned:0,
  animalMult: 1,
  stuntCost: 500000,
  stuntOwned:0,
  stuntMult: 1,
  pretzelCost: 1000000,
  pretzelOwned:0,
  pretzelMult: 1,
  dangerousCost: 25000000,
  dangerousOwned:0,
  dangerousMult: 1,
  disgustingCost: 1000000000,
  disgustingOwned:0,
  disgustingMult: 1,
  
  //Building amounts
  tentCost: 10,
  tentOwned:0,
  vanCost:750,
  vanOwned:0,
  motelCost:1000, 
  motelOwned:0,
  clowndoCost: 0,
  clowndoOwned:0,
  hotelCost: 0,
  hotelOwned: 0,
  mansionCost: 0,
  mansionOwned:0,
  townCost: 0,
  townOwned: 0,
  townMult: 1,
  countryCost: 0,
  countryOwned: 0,
  spireCost: 0,
  spireOwned: 0,
  //WE GROW
  //WE ASSIMILATE
  //WE HONK.
  hiveCost: 0,
  varHiveLimit:0,
  hiveOwned: 0,
}
//This should load the game properly now
var savegame = JSON.parse(localStorage.getItem("ClownCircus"))
if (savegame !== null) {
  gameData = savegame
}

//This is for updating the player's stats - UPDATE PLAYER STATS
function updateHTML() {
  document.getElementById("currentCash").innerHTML = "Current Cash: $" + shortenVal(gameData.varCash)
  //handling contempt is fun. I think paired with the contempt it should decrease income by a fraction according to which rung you're in?
  if (gameData.varContempt >= 0) {
    document.getElementById("currentContempt").innerHTML = "Clown Contempt: " + shortenVal(gameData.varContempt) + "/" + shortenVal(gameData.varContemptLimit)
    document.getElementById("currentContempt").style.color = "black";
    if (gameData.varContempt >= (gameData.varContemptLimit * 0.75)) {
      document.getElementById("currentContempt").innerHTML = "Clown Contempt: " + shortenVal(gameData.varContempt) + "/" + shortenVal(gameData.varContemptLimit)
      document.getElementById("currentContempt").style.color = "#bf0d00"
      if (gameData.varContempt >= (gameData.varContemptLimit * 0.9)) {
        document.getElementById("currentContempt").innerHTML = "Clown Contempt: " + shortenVal(gameData.varContempt) + "/" + shortenVal(gameData.varContemptLimit)
        document.getElementById("currentContempt").style.color = "#e60f00"
        if (gameData.varContempt >= (gameData.varContemptLimit * 0.95)) {
          document.getElementById("currentContempt").innerHTML = "Clown Contempt: " + shortenVal(gameData.varContempt) + "/" + shortenVal(gameData.varContemptLimit)
          document.getElementById("currentContempt").style.color = "#ff1100"
        }
      }
    }
  }
  document.getElementById("currentFear").innerHTML = "Audience Fear: " + shortenVal(gameData.varFear)
  
  if (gameData.varClowns < gameData.varClimit) {
    document.getElementById("currentClimit").innerHTML = "Clowns: " + (gameData.varClowns) + "/" + (gameData.varClimit) 
    if (gameData.varClowns == gameData.varClimit) {
      document.getElementById("currentClimit").style.color = "red"
    }
  }
}
//This is for updating the costs of buildings and clowns - UPDATE CLOWNS AND BUILDINGS
function updateCosts() {
  document.getElementById("comedyCost").innerHTML = "Current cost is: $" + shortenVal(gameData.comedyCost)
  document.getElementById("comedyOwned").innerHTML = "Owned: " + shortenVal(gameData.comedyOwned)
  document.getElementById("jugglingCost").innerHTML = "Current cost is: $" + shortenVal(gameData.jugglingCost)
  document.getElementById("jugglingOwned").innerHTML = "Owned: " + shortenVal(gameData.jugglingOwned)
  document.getElementById("balancingCost").innerHTML = "Current cost is: $" + shortenVal(gameData.balancingCost)
  document.getElementById("balancingOwned").innerHTML = "Owned: " + shortenVal(gameData.balancingOwned)
  document.getElementById("animalCost").innerHTML = "Current cost is: $" + shortenVal(gameData.animalCost)
  document.getElementById("animalOwned").innerHTML = "Owned: " + shortenVal(gameData.animalOwned)
  document.getElementById("stuntCost").innerHTML = "Current cost is: $" + shortenVal(gameData.stuntCost)
  document.getElementById("stuntOwned").innerHTML = "Owned: " + shortenVal(gameData.stuntOwned)
  document.getElementById("pretzelCost").innerHTML = "Current cost is: $" + shortenVal(gameData.pretzelCost)
  document.getElementById("pretzelOwned").innerHTML = "Owned: " + shortenVal(gameData.pretzelOwned)
  document.getElementById("dangerousCost").innerHTML = "Current cost is: $" + shortenVal(gameData.dangerousCost)
  document.getElementById("dangerousOwned").innerHTML = "Owned: " + shortenVal(gameData.dangerousOwned)
  document.getElementById("disgustingCost").innerHTML = "Current cost is: $" + shortenVal(gameData.disgustingCost)
  document.getElementById("disgustingOwned").innerHTML = "Owned: " + shortenVal(gameData.disgustingOwned)
  
  document.getElementById("tentCost").innerHTML = "Current cost is: $" + shortenVal(gameData.tentCost)
  document.getElementById("tentOwned").innerHTML = "Owned: " + shortenVal(gameData.tentOwned)
  document.getElementById("vanCost").innerHTML = "Current cost is: $" + shortenVal(gameData.vanCost)
  document.getElementById("vanOwned").innerHTML = "Owned: " + shortenVal(gameData.vanOwned)
  document.getElementById("motelCost").innerHTML = "Current cost is: $" + shortenVal(gameData.motelCost)
  document.getElementById("motelOwned").innerHTML = "Owned: " + shortenVal(gameData.motelOwned)
  document.getElementById("clowndoCost").innerHTML = "Current cost is: $" + shortenVal(gameData.clowndoCost)
  document.getElementById("clowndoOwned").innerHTML = "Owned: " + shortenVal(gameData.clowndoOwned)
  document.getElementById("hotelCost").innerHTML = "Current cost is: $" + shortenVal(gameData.hotelCost)
  document.getElementById("hotelOwned").innerHTML = "Owned: " + shortenVal(gameData.hotelOwned)
  document.getElementById("mansionCost").innerHTML = "Current cost is: $" + shortenVal(gameData.mansionCost)
  document.getElementById("mansionOwned").innerHTML = "Owned: " + shortenVal(gameData.mansionOwned)
  document.getElementById("townCost").innerHTML = "Current cost is: $" + shortenVal(gameData.townCost)
  document.getElementById("townOwned").innerHTML = "Owned: " + shortenVal(gameData.townOwned)
  /*
  document.getElementById("countryCost").innerHTML = "Current cost is: $" + shortenVal(gameData.countryCost)
  document.getElementById("countryOwned").innerHTML = "Owned: " + shortenVal(gameData.countryOwned)
  document.getElementById("spireCost").innerHTML = "Current cost is: $" + shortenVal(gameData.spireCost)
  document.getElementById("spireOwned").innerHTML = "Owned: " + shortenVal(gameData.spireOwned)
  document.getElementById("hiveCost").innerHTML = "Current cost is: $" + shortenVal(gameData.hiveCost)
  document.getElementById("hiveOwned").innerHTML = "Owned: " + shortenVal(gameData.hiveOwned)
  */
}

//Onload function to properly load all elements - ONLOAD FUNCTION
function loadGame() {
  updateHTML()
  updateCosts()
}

/*
 Function for rounding values to K, M, B, ETC
 This is possibly the dumbest way to do this 
 But it works, it's so stupid though, christ.
*/
function shortenVal(val) {
  valReturn = 0.0
  if ((val >= 0) && (val < 1000)) {
    valReturn = (val.toFixed(2))
    return valReturn
  }
  if ((val >= 1000) && (val < 1000000)) {
    valReturn =((val/1000).toFixed(2)) + "Ki"
  }
  if ((val >= 1000000) && (val < 1000000000)) {
    valReturn =((val/1000000).toFixed(2)) + "Mi"
  }
  if ((val >= 1000000000) && (val < 1000000000000)) {
    valReturn =((val/1000000000).toFixed(2)) + "Bi"
  }
  if ((val >= 1000000000000) && (val  < 1000000000000000)) {
    valReturn =((val/1000000000000).toFixed(2)) + "Tr"
  }
  if ((val >= 1000000000000000) && (val < 1000000000000000000)) {
    valReturn =((val/1000000000000000).toFixed(2)) + "Qa"
  }
  if ((val >= 1000000000000000000) && (val < 1000000000000000000000)) {
    valReturn=((val/1000000000000000000).toFixed(2)) + "Qu"
  }
  if ((val >= 1000000000000000000000) && (val < 1000000000000000000000000)) {
    valReturn=((val/1000000000000000000000).toFixed(2)) + "Sx"
  }
  if ((val >= 1000000000000000000000000) && (val < 1000000000000000000000000000)) {
    valReturn=((val/1000000000000000000000000).toFixed(2)) + "Sp"
  }
  if ((val >= 1000000000000000000000000000) && (val < 1000000000000000000000000000000)) {
    valReturn=((val/1000000000000000000000000000).toFixed(2)) + "Oc"
  }
  if ((val >= 1000000000000000000000000000000) && (val < 1000000000000000000000000000000000)) {
    valReturn=((val/1000000000000000000000000000000).toFixed(2)) + "Ni"
  }
  if ((val >= 1000000000000000000000000000000000) && (val < 1000000000000000000000000000000000000)) {
    valReturn=((val/1000000000000000000000000000000000).toFixed(2)) + "De"
  }
  return valReturn
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
  updateHTML()
  updateCosts()
}
//Perform function for adding cash money baby
function perform() {
  gameData.varCash = gameData.varCash + gameData.perPerform
  gameData.varAllTimeCash += gameData.perPerform
}



//Purchasing function, pass in clownType as selection via button click function storePurchase(var)
//Potential to make this do x10, x100 at later date? Pass in two variables - clownType and amount ???
function clownPurchase(clownType) {
  if (gameData.varClowns < gameData.varClimit) {
    if (clownType == "comedy") {
      if (gameData.varCash >= gameData.comedyCost) {
        gameData.varCash -= gameData.comedyCost
        gameData.perPerform = gameData.perPerform + 0.25
        gameData.comedyCost *= 1.4
      }
    }
    if (clownType == "juggling") {
      if (gameData.varCash >= gameData.jugglingCost) {
        gameData.varCash -= gameData.jugglingCost
        gameData.jugglingCost *= 1.5
        gameData.jugglingOwned += 1
      //put document.getElementById for juggling et al down here
      }
    }
    if (clownType == "balancing") {
      if (gameData.varCash >= gameData.balancingCost) {
        gameData.varCash -= gameData.balancingCost
        gameData.balancingCost *= 1.49
        gameData.balancingOwned += 1
      }
    }
    if (clownType == "animal") {
      if (gameData.varCash >= gameData.animalCost) {
        gameData.varCash -= gameData.animalCost
        gameData.animalCost *= 1.47
        gameData.animalOwned += 1
      }
    }
    if (clownType == "stunt") {
      if (gameData.varCash >= gameData.stuntCost) {
        gameData.varCash -= gameData.stuntCost
        gameData.stuntCost *= 1.45
        gameData.stuntOwned += 1
      }
    }
    if (clownType == "pretzel") {
     if (gameData.varCash >= gameData.pretzelCost) {
       gameData.varCash -= gameData.pretzelCost
       gameData.pretzelCost *= 1.43
       gameData.pretzelOwned += 1
     }
    }
    if (clownType == "dangerous") {
      if (gameData.varCash >= gameData.dangerousCost) {
        gameData.varCash -= gameData.dangerousCost
        gameData.dangerousCost *= 1.41
        gameData.dangerousOwned += 1
      }
    }
    if (clownType == "disgusting") {
      if (gameData.varCash >= gameData.disgustingCost) {
        gameData.varCash -= gameData.disgustingCost
        gameData.disgustingCost *= 1.39
        gameData.disgustingOwned += 1
      }
    }
    gameData.varClowns += 1
    updateCosts()
  //MORE WILL FOLLOW i just got lazy and this is a prototype :)
  }
}

function upgradePurchase(upgradeType) {
}
  
function buildingPurchase(buildType) {
  if (buildType == "tent") {
    if (gameData.varCash >= gameData.tentCost) {
      gameData.varCash -= gameData.tentCost
      gameData.varClimit += 1
      gameData.tentCost *= 1.8
      gameData.tentOwned += 1
    }
  }
  
  if (buildType == "van") {
    if (gameData.varCash >= gameData.vanCost) {
      gameData.varCash -= gameData.tentCost
      gameData.varClimit += 2
      gameData.vanCost *= 1.75
      gameData.vanOwned += 1
    }
  }
  
  if (buildType == "motel") {
    if (gameData.varCash >= gameData.motelCost) {
      gameData.varCash -= gameData.motelCost
      gameData.varClimmit += 10
      gameData.motelCost *= 1.7
      gameData.motelOwned += 1
    }
  }
  
  if (buildType == "clowndo") {
    if (gameData.varCash >= gameData.clowndoCost) {
      gameData.varCash -= gameData.clowndoCost
      gameData.varClimit += 20
      gameData.clowndoCost *= 1.65
      gameData.clowndoOwned += 1
    }
  }
  
  if (buildType == "hotel") {
    if (gameData.varCash >= gameData.hotelCost) {
      gameData.varCash -= gameData.hotelCost
      gameData.varClimit += 50
      gameData.hotelCost *= 1.65
      gameData.hotelOwned += 1
    }
  }
  
  if (buildType == "mansion") {
    if (gameData.varCash >= gameData.mansionCost) {
      gameData.varCash -= gameData.mansionCost
      gameData.varClimit += 30
      gameData.varContemptLimit += 50
      gameData.mansionCost *= 1.6
      gameData.mansionOwned += 1
    }
  }
  
  if (buildType =="town") {
    if (gameData.varCash >= gameData.townCost) {
      gameData.varCash -= gameData.townCost
      gameData.varClimit += 100
      gameData.townCost *= 1.55
      gameData.townOwned += 1
    }
  }
  
  if (buildType == "country") {
    if (gameData.varCash >= gameData.countryCost) {
      gameData.varCash -= gameData.countryCost
      gameData.varClimit += 500
      gameData.countryCost *= 1.5
      gameData.countryOwned += 1
    }
  }
  
  if (buildType == "spire") {
    if (gameData.varCash >= gameData.spireCost) {
      gameData.varCash -= gameData.spireCost
      gameData.varClimit += 1000
      gameData.spireCost *= 1.45
      gameData.spireOwned += 1
    }
  }
  
  if (buildType == "hive") {
    if (gameData.varCash >= gameData.hiveCost) {
      gameData.varCash -= gameData.hiveCost
      gameData.varClimit += 1
      gameData.hiveCost *= 1.5
      gameData.hiveOwned += 1
    }
  }
  updateCosts()
}

//Per second
var mainGameLoop = window.setInterval(function() {
  //For later use - adds varPassiveIncome to varCash every second
  gameData.varCash += (((gameData.jugglingOwned * 1) * gameData.jugglingMult) + ((gameData.balancingOwned * 5) * gameData.balancingMult) + ((gameData.animalOwned * 20) * gameData.animalMult) + ((gameData.stuntOwned * 100) * gameData.stuntMult) + ((gameData.pretzelOwned * 200) * gameData.pretzelMult) + ((gameData.dangerousOwned * 500) * gameData.dangerousMult) + ((gameData.disgustingOwned * 1000) * gameData.disgustingMult) + ((gameData.townOwned * 20) * gameData.townMult))
  gameData.varAllTimeCash += (((gameData.jugglingOwned * 1) * gameData.jugglingMult) + ((gameData.balancingOwned * 5) * gameData.balancingMult) + ((gameData.animalOwned * 20) * gameData.animalMult) + ((gameData.stuntOwned * 100) * gameData.stuntMult) + ((gameData.pretzelOwned * 200) * gameData.pretzelMult) + ((gameData.dangerousOwned * 500) * gameData.dangerousMult) + ((gameData.disgustingOwned * 1000) * gameData.disgustingMult) + ((gameData.townOwned * 20) * gameData.townMult))
}, 1000)

//Per 15 seconds
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem("ClownCircus", JSON.stringify(gameData))
}, 15000)

//Per tick (12ms)
var updateLoop = window.setInterval(function() {
  updateHTML()
}, 12)


//Perform button js
var animateButton = function(e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};
var classname = document.getElementsByClassName("playerButtons");
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', animateButton, false);
}

//Debug commands go down below everything
function debugLodesMone(money) {
  gameData.varCash = money
}

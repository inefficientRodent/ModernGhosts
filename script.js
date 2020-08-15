var gameData = {
  //basic variables
  varCash: 0,
  perPerform: 1,
  varFear: 0,
  varContempt: 0,
  clownLimit:0,
  
  //Clown Purchase Variables
  comedyCost: 10,
  comedyRatio: 1.15,
  
  jugglingCost: 150,
  jugglingRatio: 1.12,
  
  balancingCost:,
  balancingRatio:,
}

function perform() {
  gameData.varCash += gameData.perPerform
  document.getElementById("currentCash").innerHTML = "$" + gameData.varCash
}

//Purchasing function, pass in clownType as selection via button click function storePurchase(var)
function storePurchase(clownType) {
  if (clownType = "comedy") {
    if (gameData.varCash >= gameData.comedyCost) {
      gameData.varCash -= gameData.comedyCost
      gameData.perPerform += 0.1
      gameData.comedyCost *= 1.1
    }
  }
  if (clownType = "juggling") {
    if (gameData.varCash >= gameData.jugglingCost) {
      gameData.varCash -= gameData.jugglingCost
      gameData.passiveIncome += 0.5
      gameData.jugglingCost *= 
    }
  }
  if (clownType = "balancing") {
    if (gameData.varCash >= gameData.balancingCost) {
      gameData.varCash -= gameData.balancingCost
      gameData.passiveIncome +== 00
      gameData.balancingCost *= 00
    }
  }
}

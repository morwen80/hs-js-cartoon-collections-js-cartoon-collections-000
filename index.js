function dwarfRollCall(dwarves) {
 let names = 1
 return dwarves.map(x => names++ +". " + x + " ").join("");
}

function summonCaptainPlanet(planeteerCalls) {
  return planeteerCalls.map(x => x.uppercase + "!")
}


function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
   if(words[i].length > 4) {
      return true 
   } else {
 return false 
   }
  }
}


function findTheCheese (foods) {
for(let i = 0; i < foods.length; i++) {
  if (foods.includes("cheddar")){
    return "cheddar"
  } else if (foods.includes("gouda")) {
    return "gouda"
  } else if (foods.includes("camembert")) {
    return "camembert"
  } else {
    return "no cheese!"
  }
}

}
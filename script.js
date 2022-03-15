function calculate(){
  canadaB = 14
  canadaS = 8
  canadaG = 4
  canadaT = canadaB + canadaS + canadaG
  canadaA = 215
  canadaR = canadaT/canadaA
  canadaR = canadaR.toFixed(3)

  norwayB = 13
  norwayS = 8
  norwayG = 16
  norwayT = norwayB + norwayS + norwayG
  norwayA = 84
  norwayR = norwayT/norwayA
  norwayR = norwayR.toFixed(3)

  chinaB = 2
  chinaS = 4
  chinaG = 9
  chinaT = chinaB + chinaS + chinaG
  chinaA = 176
  chinaR = chinaT/chinaA
  chinaR = chinaR.toFixed(3)

  zealandB = 0
  zealandS = 1
  zealandG = 2
  zealandT = zealandB + zealandS + zealandG
  zealandA = 21
  zealandR = zealandT/zealandA
  zealandR = zealandR.toFixed(3)

  germanyB = 5
  germanyS = 10
  germanyG = 12
  germanyT = germanyB + germanyS + germanyG
  germanyA = 149
  germanyR = germanyT/germanyA
  germanyR = germanyR.toFixed(3)

  netherlandsB = 4
  netherlandsS = 5
  netherlandsG = 8
  netherlandsT = netherlandsB + netherlandsS + netherlandsG
  netherlandsA = 41
  netherlandsR = netherlandsT/netherlandsA
  netherlandsR = netherlandsR.toFixed(3)

  finlandB = 4
  finlandS = 2
  finlandG = 2
  finlandT = finlandB + finlandS + finlandG
  finlandA = 96
  finlandR = finlandT/finlandA
  finlandR = finlandR.toFixed(3)

  austriaB = 4
  austriaS = 7
  austriaG = 7
  austriaT = austriaB + austriaS + austriaG
  austriaA = 106
  austriaR = austriaT/austriaA
  austriaR = austriaR.toFixed(3)

  ukB = 0
  ukS = 0
  ukG = 0
  ukT = ukB + ukS + ukG
  ukA = 50
  ukR = ukT/ukA
  ukR = ukR.toFixed(3)

  swissB = 5
  swissS = 2
  swissG = 7
  swissT = swissB + swissS + swissG
  swissA = 167
  swissR = swissT/swissA
  swissR = swissR.toFixed(3)

  italyB = 8
  italyS = 7
  italyG = 2
  italyT = italyB + italyS + italyG
  italyA = 118
  italyR = italyT/italyA
  italyR = italyR.toFixed(3)

 
  document.getElementById("canadaBronze").innerHTML = canadaB;
  document.getElementById("canadaSilver").innerHTML = canadaS;
  document.getElementById("canadaGold").innerHTML = canadaG;
  document.getElementById("norwayBronze").innerHTML = norwayB;
  document.getElementById("norwaySilver").innerHTML = norwayS;
  document.getElementById("norwayGold").innerHTML = norwayG;
  document.getElementById("chinaBronze").innerHTML = chinaB;
  document.getElementById("chinaSilver").innerHTML = chinaS;
  document.getElementById("chinaGold").innerHTML = chinaG;
  document.getElementById("zealandBronze").innerHTML = zealandB;
  document.getElementById("zealandSilver").innerHTML = zealandS;
  document.getElementById("zealandGold").innerHTML = zealandG;
  document.getElementById("germanyBronze").innerHTML = germanyB;
  document.getElementById("germanySilver").innerHTML = germanyS;
  document.getElementById("germanyGold").innerHTML = germanyG;
  document.getElementById("netherlandsBronze").innerHTML = netherlandsB;
  document.getElementById("netherlandsSilver").innerHTML = netherlandsS;
  document.getElementById("netherlandsGold").innerHTML = netherlandsG;
  document.getElementById("finlandBronze").innerHTML = finlandB;
  document.getElementById("finlandSilver").innerHTML = finlandS;
  document.getElementById("finlandGold").innerHTML = finlandG;
  document.getElementById("austriaBronze").innerHTML = austriaB;
  document.getElementById("austriaSilver").innerHTML = austriaS;
  document.getElementById("austriaGold").innerHTML = austriaG;
  document.getElementById("ukBronze").innerHTML = ukB;
  document.getElementById("ukSilver").innerHTML = ukS;
  document.getElementById("ukGold").innerHTML = ukG;
  document.getElementById("swissBronze").innerHTML = swissB;
  document.getElementById("swissSilver").innerHTML = swissS;
  document.getElementById("swissGold").innerHTML = swissG;
  document.getElementById("italyBronze").innerHTML = italyB;
  document.getElementById("italySilver").innerHTML = italyS;
  document.getElementById("italyGold").innerHTML = italyG;


  document.getElementById("canadaTotal").innerHTML = canadaT;
  document.getElementById("norwayTotal").innerHTML = norwayT;
  document.getElementById("chinaTotal").innerHTML = chinaT;
  document.getElementById("zealandTotal").innerHTML = zealandT;
  document.getElementById("germanyTotal").innerHTML = germanyT;
  document.getElementById("netherlandsTotal").innerHTML = netherlandsT;
  document.getElementById("finlandTotal").innerHTML = finlandT;
  document.getElementById("austriaTotal").innerHTML = austriaT;
  document.getElementById("ukTotal").innerHTML = ukT;
  document.getElementById("swissTotal").innerHTML = swissT;
  document.getElementById("italyTotal").innerHTML = italyT;

  document.getElementById("canadaRatio").innerHTML = canadaR;
  document.getElementById("norwayRatio").innerHTML = norwayR;
  document.getElementById("chinaRatio").innerHTML = chinaR;
  document.getElementById("zealandRatio").innerHTML = zealandR;
  document.getElementById("germanyRatio").innerHTML = germanyR;
  document.getElementById("netherlandsRatio").innerHTML = netherlandsR;
  document.getElementById("finlandRatio").innerHTML = finlandR;
  document.getElementById("austriaRatio").innerHTML = austriaR;
  document.getElementById("ukRatio").innerHTML = ukR;
  document.getElementById("swissRatio").innerHTML = swissR;
  document.getElementById("italyRatio").innerHTML = italyR;

  const totals = []
  totals.push(canadaR)
  totals.push(norwayR)
  totals.push(chinaR)
  totals.push(zealandR)
  totals.push(germanyR)
  totals.push(netherlandsR)
  totals.push(finlandR)
  totals.push(austriaR)
  totals.push(ukR)
  totals.push(swissR)
  totals.push(italyR)


  const country = ["canada", "norway", "china", "zealand", "germany", "netherlands", "finland", "austria", "uk", "swiss", "italy"]
  
  const canada = ["canada"]
  canada.push(canadaR)
  
  const norway = ["norway"]
  norway.push(norwayR)
  
  const china = ["china"]
  china.push(chinaR)

  const zealand = ["zealand"]
  zealand.push(zealandR)
  
  const germany = ["germany"]
  germany.push(germanyR)

  const netherlands = ["netherlands"]
  netherlands.push(netherlandsR)
  
  const finland = ["finland"]
  finland.push(finlandR)
  
  const austria = ["austria"]
  austria.push(austriaR)
  
  const uk = ["uk"]
  uk.push(ukR)
  
  const swiss = ["swiss"]
  swiss.push(swissR)
  
  const italy = ["italy"]
  italy.push(italyR)


  orderedtotals = totals.sort(function(a, b){return b-a});

  for (let i = 0; i < 11; i++) {
    if (canadaR == orderedtotals[i]){
      canadaP = i+1
    }
    if (norwayR == orderedtotals[i]){
      norwayP = i+1
    }
    if (chinaR == orderedtotals[i]){
      chinaP = i+1
    }
    if (zealandR == orderedtotals[i]){
      zealandP = i+1
    }
    if (germanyR == orderedtotals[i]){
      germanyP = i+1
    }
    if (netherlandsR == orderedtotals[i]){
      netherlandsP = i+1
    }
    if (finlandR == orderedtotals[i]){
      finlandP = i+1
    }
    if (austriaR == orderedtotals[i]){
      austriaP = i+1
    }
    if (ukR == orderedtotals[i]){
      ukP = i+1
    }
    if (swissR == orderedtotals[i]){
      swissP = i+1
    }
    if (italyR == orderedtotals[i]){
      italyP = i+1
    }

  }

console.log(zealandP)
console.log(ukP)
console.log(finlandP)
  if (canadaP == 1){
    document.getElementById("canadaPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("canadaPlace").innerHTML = canadaP+"st";

  } else if (canadaP == 2){
    document.getElementById("canadaPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("canadaPlace").innerHTML = canadaP+"nd";

  } else if (canadaP == 3){
    document.getElementById("canadaPlace").style.backgroundColor = "#ffd700";  
    document.getElementById("canadaPlace").innerHTML = canadaP+"rd";
  } else {
    document.getElementById("canadaPlace").style.backgroundColor = "grey";   
    document.getElementById("canadaPlace").innerHTML = canadaP+"th";

  }


  if (norwayP == 1){
    document.getElementById("norwayPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("norwayPlace").innerHTML = norwayP+"st";

  } else if (norwayP == 2){
    document.getElementById("norwayPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("norwayPlace").innerHTML = norwayP+"nd";

  } else if (norwayP == 3){
    document.getElementById("norwayPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("norwayPlace").innerHTML = norwayP+"rd";
  } else {
    document.getElementById("norwayPlace").style.backgroundColor = "grey";   
    document.getElementById("norwayPlace").innerHTML = norwayP+"th";

  }


    if (chinaP == 1){
    document.getElementById("chinaPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("chinaPlace").innerHTML = chinaP+"st";

  } else if (chinaP == 2){
    document.getElementById("chinaPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("chinaPlace").innerHTML = chinaP+"nd";

  } else if (chinaP == 3){
    document.getElementById("chinaPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("chinaPlace").innerHTML = chinaP+"rd";
  } else {
    document.getElementById("chinaPlace").style.backgroundColor = "grey";   
    document.getElementById("chinaPlace").innerHTML = chinaP+"th";

  }



  if (zealandP == 1){
    document.getElementById("zealandPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("zealandPlace").innerHTML = zealandP+"st";

  } else if (zealandP == 2){
    document.getElementById("zealandPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("zealandPlace").innerHTML = zealandP+"nd";

  } else if (zealandP == 3){
    document.getElementById("zealandPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("zealandPlace").innerHTML = zealandP+"rd";
  } else {
      document.getElementById("zealandPlace").style.backgroundColor = "grey";   
    document.getElementById("zealandPlace").innerHTML = zealandP+"th";

  }


  if (germanyP == 1){
    document.getElementById("germanyPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("germanyPlace").innerHTML = germanyP+"st";

  } else if (germanyP == 2){
    document.getElementById("germanyPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("germanyPlace").innerHTML = germanyP+"nd";

  } else if (germanyP == 3){
    document.getElementById("germanyPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("germanyPlace").innerHTML = germanyP+"rd";
  } else {
      document.getElementById("germanyPlace").style.backgroundColor = "grey";   
    document.getElementById("germanyPlace").innerHTML = germanyP+"th";

  }



  if (netherlandsP == 1){
    document.getElementById("netherlandsPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("netherlandsPlace").innerHTML = netherlandsP+"st";

  } else if (netherlandsP == 2){
    document.getElementById("netherlandsPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("netherlandsPlace").innerHTML = netherlandsP+"nd";

  } else if (netherlandsP == 3){
    document.getElementById("netherlandsPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("netherlandsPlace").innerHTML = netherlandsP+"rd";
  } else {
    document.getElementById("netherlandsPlace").style.backgroundColor = "grey";   
    document.getElementById("netherlandsPlace").innerHTML = netherlandsP+"th";

  }



  if (finlandP == 1){
    document.getElementById("finlandPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("finlandPlace").innerHTML = finlandP+"st";

  } else if (finlandP == 2){
    document.getElementById("finlandPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("finlandPlace").innerHTML = finlandP+"nd";

  } else if (finlandP == 3){
    document.getElementById("finlandPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("finlandPlace").innerHTML = finlandP+"rd";
  } else {
    document.getElementById("finlandPlace").style.backgroundColor = "grey";   
    document.getElementById("finlandPlace").innerHTML = finlandP+"th";

  }



  if (austriaP == 1){
    document.getElementById("austriaPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("austriaPlace").innerHTML = austriaP+"st";

  } else if (austriaP == 2){
    document.getElementById("austriaPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("austriaPlace").innerHTML = austriaP+"nd";

  } else if (austriaP == 3){
    document.getElementById("austriaPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("austriaPlace").innerHTML = austriaP+"rd";
  } else {
    document.getElementById("austriaPlace").style.backgroundColor = "grey";   
    document.getElementById("austriaPlace").innerHTML = austriaP+"th";

  }
  

  
  if (ukP == 1){
    document.getElementById("ukPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("ukPlace").innerHTML = ukP+"st";

  } else if (ukP == 2){
    document.getElementById("ukPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("ukPlace").innerHTML = ukP+"nd";

  } else if (ukP == 3){
    document.getElementById("ukPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("ukPlace").innerHTML = ukP+"rd";
  } else {
    document.getElementById("ukPlace").style.backgroundColor = "grey";   
    document.getElementById("ukPlace").innerHTML = ukP+"th";

  }

  if (swissP == 1){
    document.getElementById("swissPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("swissPlace").innerHTML = swissP+"st";

  } else if (swissP == 2){
    document.getElementById("swissPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("swissPlace").innerHTML = swissP+"nd";

  } else if (swissP == 3){
    document.getElementById("swissPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("swissPlace").innerHTML = swissP+"rd";
  } else {
    document.getElementById("swissPlace").style.backgroundColor = "grey";   
    document.getElementById("swissPlace").innerHTML = swissP+"th";

  }

  if (italyP == 1){
    document.getElementById("italyPlace").style.backgroundColor = "#ffd700";   
    document.getElementById("italyPlace").innerHTML = italyP+"st";

  } else if (italyP == 2){
    document.getElementById("italyPlace").style.backgroundColor = "#c0c0c0";  
    document.getElementById("italyPlace").innerHTML = italyP+"nd";

  } else if (italyP == 3){
    document.getElementById("italyPlace").style.backgroundColor = "#cd7f32";  
    document.getElementById("italyPlace").innerHTML = italyP+"rd";
  } else {
    document.getElementById("italyPlace").style.backgroundColor = "grey";   
    document.getElementById("italyPlace").innerHTML = italyP+"th";

  }
}


  //loop through, countryP is the place
//If countryP = 1, color box winner
//if countryP = 2, color second place
// if countryP = 3, color box third
// if countryP = enything else color box grey and put number in box


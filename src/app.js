//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  var arr = [managerName, managerAge, currentTeam, trophiesWon]
  return arr;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
	if (formation.length == 0){
		return null;
	}
  var form = {defender:formation[0], midfield:formation[1], forward:formation[2]};
  return form;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  var deb = [],j=0;
  for(i=0;i<players.length; i++)
  { if(year==players[i]["debut"])
    { deb[j] = players[i];
     j++;
    }
  }
  return deb;
}
  
//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  var po = [], j=0;
  for(i=0;i<players.length; i++)
  { if(position==players[i]["position"])
    { po[j] = players[i];
     j++;
    }
  }
  return po;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var aw = [], j=0;
  for(i=0;i<players.length; i++)
  {for(k=0; k<players[i]["awards"].length; k++)
  { if(awardName==players[i]["awards"][k]["name"])
    { aw[j] = players[i];
     j++;
    }
  }}
  return aw;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes){
  var aw = [], j=0,i, k;
  for(i=0;i<players.length; i++)
  {var awc = 0;
    for(k=0; k<players[i]["awards"].length; k++)
  { if(awardName==players[i]["awards"][k]["name"])
    { awc++;
    }
  }
   if(noOfTimes==awc){
     aw[j] = players[i];
     j++;
   }
    }
  return aw;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country){
  var aw = [], j=0;
  for(i=0;i<players.length; i++)
  {for(k=0; k<players[i]["awards"].length; k++)
  { if(awardName==players[i]["awards"][k]["name"] && country==players[i]["country"])
    { aw[j] = players[i];
     j++;
     break;
    }
  }}
  return aw;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  var aw = [], j=0;
  for(i=0;i<players.length; i++)
  {if(noOfAwards<=players[i]["awards"].length && team==players[i]["team"] && age>players[i]["age"])
   {aw[j]=players[i];}
  }
  return aw;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  var aw = [];
  players.sort(function(a, b){return b.age - a.age});
  for(i=0;i<players.length; i++)
  {aw[i]=players[i]["name"]}
  return aw;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team){
  var aw = [], tm=[], j=0;
  for(i=0;i<players.length; i++){
    if(players[i]["team"]==team){
      tm[j] = players[i];
      j++;
    }}
  tm.sort(function(a, b){return b.awards.length - a.awards.length});
  for(i=0;i<tm.length; i++)
  {aw[i]=tm[i]["name"]}
  return aw;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  var aw = [], j=0,i, k;
  for(i=0;i<players.length; i++)
  {var awc = 0;
    for(k=0; k<players[i]["awards"].length; k++)
  { if(awardName==players[i]["awards"][k]["name"])
    { awc++;
    }
  }
   if(noOfTimes==awc && players[i]["country"]==country){
     aw[j] = players[i]["name"];
     j++;
   }
    }
  return aw.sort();
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  var aw=[],j=0;
  for(i=0; i<players.length; i++)
  { if(players[i]["age"]>age){
    aw[j] = players[i]["name"];
    j++;}
  }
  for(i=0; i<aw.length; i++)
  { for(k=0; k<players.length; k++)
    { if(aw[i]==players[k]["name"])
      {players[k]["awards"].sort(function(a, b){return b.year - a.year});}
    }
  }
   return aw.sort();
}

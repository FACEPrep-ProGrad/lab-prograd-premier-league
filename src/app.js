//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var arr = [managerName, managerAge, currentTeam, trophiesWon];
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

function createFormation(formation) {
  if(formation.length == 0) {
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
  var date = [],j=0;
  for(i=0;i<players.length; i++)
  { 
    if(year==players[i]["debut"])
    { 
      date[j] = players[i];
     j++;
    }
  }
  return date;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  var axis = [], j=0;
  for(i=0;i<players.length; i++)
  { 
    if(position==players[i]["position"])
    { 
      axis[j] = players[i];
      j++;
    }
  }
  return axis;
}


//Progression 5 - Filter players that have won ______ award

function filterByAward(awn){
  var awardlist = [], j=0;
  for(i=0;i<players.length; i++)
  {
    for(k=0; k<players[i]["awards"].length; k++)
    { 
      if(awn==players[i]["awards"][k]["name"])
        { 
          awardlist[j] = players[i];
          j++;
        }
    }
  }
  return awardlist;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(name, num){
  var awardlist = [], j=0,i, k;
  for(i=0;i<players.length; i++)
  {
    var total = 0;
    for(k=0; k<players[i]["awards"].length; k++)
    { 
      if(name==players[i]["awards"][k]["name"])
      { 
        total++;
      }
  }
   if(num==total)
   {
     awardlist[j] = players[i];
     j++;
   }
  }
  return awardlist;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awname, country){
  var awardlist = [], j=0;
  for(i=0;i<players.length; i++)
  {
    for(k=0; k<players[i]["awards"].length; k++)
    { 
    if(awname==players[i]["awards"][k]["name"] && country==players[i]["country"])
    { 
      awardlist[j] = players[i];
      j++;
      break;
    }
  }
}
  return awardlist;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(total, team, age)
{
  var awardlist = [], j=0;
  for(i=0;i<players.length; i++)
  {
    if(total<=players[i]["awards"].length && team==players[i]["team"] && age>players[i]["age"])
    {
     awardlist[j]=players[i];
    }
  }
  return awardlist;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

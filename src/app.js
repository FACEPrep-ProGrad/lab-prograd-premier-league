//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
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
function createFormation(formation) {

  if (formation.length == 0) {
    return null;
  } else {
    let formationobj = {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
    return formationobj;
  }


}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var p = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      p.push(players[i]);
    }
  }
  return p;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var p = [];

  for (let i = 0; i < players.length; i++) {
    if (players[i].position == position) {
      p.push(players[i]);
    }
  }

  return p;

}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  var p = [];

  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {


      if (players[i].awards[j].name == awardName) {
        p.push(players[i]);
      }
    }
  }

  return p;


}

//Progression 6 - Filter players that won ______ award ____ times

/*function filterByAwardxTimes(awardName, noOfTimes) {
  var playerobj = [awardname: {},
    noOfTimes: {}
  ];

  for (let i = 0; i < players.length; i++) {
    var count = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        count++;
    }
    if (count == noOfTimes)
      playerobj.awardname.push(players[i].awards[j].name);
    playerobj.noOfTimes.push(noOfTimes)
  }
  return player;
}
*/
function filterByAwardxTimes(awardName, noOfTimes) {
  var p = [];

  for (let i = 0; i < players.length; i++) {
    var count = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName)
        count++;
    }
    if (count == noOfTimes)
      p.push(players[i]);
  }
  return p;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var p = [];
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName && players[i].country == country) {
        p.push(players[i])
      }
    }
  }
  return p;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {

  var p = [];
  for (var i = 0; i < players.length; i++) {
    if (
      players[i].awards.length >= noOfAwards &&
      players[i].team == team &&
      players[i].age < age
    ) {
      p.push(players[i])
    }
  }
  return p;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var p = [];

  p = Object.age(players).sort()
  return p.reverse();
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var p = [];
  var sp = [];
  var i = 0;
  for (let x of players) {
    if (x.team == team) {
      p[i++] = x;

    }
  }
  sp = p.awards.length.sort()
  return sp.reverse();
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

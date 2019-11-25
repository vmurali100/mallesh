import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PlayersService {
  constructor() {}
  getPlayers(tName) {
    let playersInfo = [];
    // players.map(team => {
    //   if (tName == team.teamName) {
    //     playersInfo = team.playersNames;
    //   }
    // });
    for (let i = 0; i < players.length; i++) {
      if (tName == players[i].teamName) {
        playersInfo = players[i].playersNames;
      }
    }
    return playersInfo;
  }
  getPlayerDetails(countryName, playerName) {
    let stats;
    playerDetails.map(country => {
      if (country.teamName == countryName) {
        country.playerDetails.map(player => {
          if (player.name == playerName) {
            stats = player.stats;
          }
        });
      }
    });

    return stats;
  }
}

let players = [
  { teamName: "India", playersNames: ["Kohli", "Rohit"] },
  { teamName: "Bangla", playersNames: ["Mushifikar", "Murtaja"] },
  { teamName: "Srilanka", playersNames: ["Sanga", "Jayavardene"] }
];

let playerDetails = [
  {
    teamName: "India",
    playerDetails: [
      { name: "Kohli", stats: { ODI: 100, T20: 250, Tests: 50 } },
      { name: "Rohit", stats: { ODI: 120, T20: 150, Tests: 20 } }
    ]
  }
];

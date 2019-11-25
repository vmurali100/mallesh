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
}

let players = [
  { teamName: "India", playersNames: ["Kohli", "Rohit"] },
  { teamName: "Bangla", playersNames: ["Mushifikar", "Murtaja"] },
  { teamName: "Srilanka", playersNames: ["Sanga", "Jayavardene"] }
];

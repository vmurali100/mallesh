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
    let playerinfo;
    playerDetails.map(country => {
      if (country.teamName == countryName) {
        country.playerDetails.map(player => {
          if (player.name == playerName) {
            playerinfo = player;
          }
        });
      }
    });

    return playerinfo;
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
      {
        name: "Kohli",
        pic:
          "https://upload.wikimedia.org/wikipedia/commons/1/15/Virat_Kohli_portrait.jpg",
        stats: { ODI: 100, T20: 250, Tests: 50 }
      },
      {
        name: "Rohit",
        pic:
          "https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-bemabt1n02m2qlob8721uj6fq0-20190708233139.jpeg",
        stats: { ODI: 120, T20: 150, Tests: 20 }
      }
    ]
  }
];

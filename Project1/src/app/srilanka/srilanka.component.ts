import { Component, OnInit } from "@angular/core";
import { PlayersService } from "../players.service";

@Component({
  selector: "app-srilanka",
  templateUrl: "./srilanka.component.html",
  styleUrls: ["./srilanka.component.css"]
})
export class SrilankaComponent implements OnInit {
  players: any;
  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers("Srilanka");
    console.log(this.players);
  }
}

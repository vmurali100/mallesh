import { Component, OnInit } from "@angular/core";
import { PlayersService } from "../players.service";

@Component({
  selector: "app-bangla",
  templateUrl: "./bangla.component.html",
  styleUrls: ["./bangla.component.css"]
})
export class BanglaComponent implements OnInit {
  players: any[];
  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers("Bangla");
  }
}

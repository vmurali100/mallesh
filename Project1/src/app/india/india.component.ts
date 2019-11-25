import { Component, OnInit } from "@angular/core";
import { PlayersService } from "../players.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-india",
  templateUrl: "./india.component.html",
  styleUrls: ["./india.component.css"]
})
export class IndiaComponent implements OnInit {
  players: any[];
  constructor(private playerService: PlayersService) {}

  ngOnInit() {
    this.players = this.playerService.getPlayers("India");
    console.log(this.players);
  }
}

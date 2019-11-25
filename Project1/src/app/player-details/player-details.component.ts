import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PlayersService } from "../players.service";

@Component({
  selector: "app-player-details",
  templateUrl: "./player-details.component.html",
  styleUrls: ["./player-details.component.css"]
})
export class PlayerDetailsComponent implements OnInit {
  playerName: any;
  playerStats: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private plService: PlayersService,
    private route: Router
  ) {}

  ngOnInit() {
    this.activeRouter.params.subscribe(param => {
      console.log(param.player);
      this.playerName = param.player;
      this.playerStats = this.plService.getPlayerDetails(
        "India",
        this.playerName
      );
    });
  }

  goBack() {
    this.route.navigate(["/india"]);
  }
}

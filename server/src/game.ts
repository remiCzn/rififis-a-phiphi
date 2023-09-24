import { gameStatus } from "common";
import { Player, PlayerManager } from "./player";

export class GameState {
  weathers: Array<number>;
  players: PlayerManager;
  current_water: number;
  current_wood: number;
  current_food: number;
  current_player: string;
  turn_count: number;
  started: boolean;
  storm_day: number;

  constructor() {
    this.weathers = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3].sort(
      () => 0.5 - Math.random()
    );
    this.storm_day = 6 + Math.floor(Math.random() * 6);
    this.weathers = [
      ...this.weathers.slice(0, this.storm_day),
      2,
      ...this.weathers.slice(this.storm_day),
    ];
    this.players = new PlayerManager();
    this.current_food = 0;
    this.current_water = 0;
    this.current_wood = 0;
    this.current_player = "";
    this.turn_count = -1;
    this.started = false;
  }

  getStatus(): gameStatus.GameStatus {
    //TODO add state "Finished" later
    if (this.started) {
      return "Launched";
    } else {
      return "Lobby";
    }
  }

  launchGame() {
    this.started = true;
    const playerCount = this.players.getList().length;
    let foodAndWater: { [x: number]: [number, number] } = {
      3: [5, 6],
      4: [7, 8],
      5: [9, 10],
      6: [10, 12],
      7: [12, 14],
      8: [13, 16],
      9: [15, 18],
      10: [16, 20],
      11: [18, 22],
      12: [20, 24],
    };

    this.current_food = foodAndWater[playerCount][0];
    this.current_water = foodAndWater[playerCount][1];
  }
}

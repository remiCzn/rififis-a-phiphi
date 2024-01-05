import { PlayerState } from "common/gameStatus";

export class Player {
  name: string;
  alive: boolean;
  sick: boolean;
  connected: boolean;

  constructor(name: string) {
    this.name = name;
    this.alive = true;
    this.sick = false;
    this.connected = true;
  }
}

export class PlayerManager {
  players: { [x: string]: Player };

  constructor() {
    this.players = {};
  }

  addPlayer(socketId: string, username: string) {
    this.players[socketId] = new Player(username);
  }

  isPlayerJoined(socketId: string): boolean {
    return Object.keys(this.players).includes(socketId);
  }

  removePlayer(socketId: string) {
    delete this.players[socketId];
  }

  getPlayer(socketId: string): Player {
    return this.players[socketId];
  }

  getList(): Array<PlayerState> {
    return Object.entries(this.players).map(([key, x]) => ({
      connected: x.connected,
      name: x.name,
      socketId: key,
    }));
  }
}

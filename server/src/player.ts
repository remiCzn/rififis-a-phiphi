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

  getList(): Array<string> {
    return Object.values(this.players).map((x) => x.name);
  }
}

import { GameStatus } from "./gameStatus";

export * as gameStatus from "./gameStatus";

export interface ClientToServerMessages {
  join: (username: string) => void;
  left: () => void;
  launchGame: () => void;
}

export interface ServerToClientMessages {
  userList: (users: Array<string>) => void;
  joined: (joined: boolean) => void;
  gameStatus: (status: GameStatus) => void;
}

import { GameStatus } from "./gameStatus";

export * as gameStatus from "./gameStatus";

export interface ClientToServerMessages {
  join: (username: string) => void;
  left: () => void;
  launchGame: (callbackError: (error: string | undefined) => void) => void;
}

export interface ServerToClientMessages {
  userList: (users: Array<string>) => void;
  joined: (joined: boolean) => void;
  gameStatus: (status: GameStatus) => void;

  foodUpdate: (value: number) => void;
  waterUpdate: (value: number) => void;
  woodUpdate: (value: number) => void;
}

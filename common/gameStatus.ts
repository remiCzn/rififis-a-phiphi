export type GameStatus = "Lobby" | "Launched";

export type PlayerState = {
  socketId: string;
  name: string;
  connected: boolean;
};

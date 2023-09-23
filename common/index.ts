export interface ClientToServerMessages {
  join: (username: string) => void;
  left: () => void;
}

export interface ServerToClientMessages {
  userList: (users: Array<string>) => void;
  joined: (joined: boolean) => void;
}

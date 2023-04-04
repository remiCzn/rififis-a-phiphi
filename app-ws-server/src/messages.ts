export enum MessageType {
  Connection = "CONNECTION",
  Users = "USERS",
  NewUser = "N_USER",
}

export type Users = { type: MessageType.Users; value: Array<{ name: string }> };
export type NewUser = { type: MessageType.NewUser; value: { name: string } };
export type Connection = {
  type: MessageType.Connection;
  value: { name: string };
};

export type Message = Users | NewUser | Connection;

export function parseMessage(raw: string): Message {
  const data: Message = JSON.parse(raw);
  return data;
}

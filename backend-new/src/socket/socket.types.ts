import { Server, Socket } from 'socket.io';
import { ClientToServerMessages, ServerToClientMessages } from 'common';

export type RififiServer = Server<
  ClientToServerMessages,
  ServerToClientMessages
>;
export type RififiSocket = Socket<
  ClientToServerMessages,
  ServerToClientMessages
>;

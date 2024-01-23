import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { RififiServer, RififiSocket } from './socket.types';
import { SocketService } from './socket.service';

@WebSocketGateway()
export class SocketGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: RififiServer;

  constructor(private socketService: SocketService) {}

  handleConnection(socket: RififiSocket, ...args: any[]) {
    // updateLobbyState(gameState, io, socket);

    socket.on('join', async (username) => {
      const game = await this.socketService.getGame(0);
      if (
        game == undefined ||
        (game.started == false && game.players.length < 12)
      ) {
        await this.socketService.insertPlayerToGame(0, 0);
      }
      // updateLobbyState(gameState, io, socket);
    });

    socket.on('left', () => {
      // if (gameState.getStatus() == 'Lobby') {
      //   gameState.players.removePlayer(socket.id);
      // }
      // updateLobbyState(gameState, io, socket);
    });

    socket.on('disconnect', () => {
      // if (gameState.getStatus() == 'Lobby') {
      //   gameState.players.removePlayer(socket.id);
      // } else if (gameState.getStatus() == 'Launched') {
      //   gameState.players.getPlayer(socket.id).connected = false;
      // }
      // updateLobbyState(gameState, io, socket);
    });

    socket.on('reconnect', (oldSocketId, reconnected) => {
      // console.log(gameState.players);
      // gameState.players.players[socket.id] = {
      //   ...gameState.players.players[oldSocketId],
      //   connected: true,
      // };
      // delete gameState.players.players[oldSocketId];
      // reconnected();
      // updateLobbyState(gameState, io, socket);
    });

    socket.on('launchGame', async (callbackError) => {
      const game = await this.socketService.getGame(0);
      if (
        game.started == false &&
        game.players.length >= 3 &&
        game.players.length <= 12
      ) {
        this.socketService.launchGame(0);
      } else {
        callbackError('The number of players must be between 3 and 12.');
      }
      // updateLobbyState(gameState, io, socket);
    });
  }
}

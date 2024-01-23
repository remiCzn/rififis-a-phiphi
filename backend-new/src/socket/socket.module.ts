import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { SocketService } from './socket.service';

@Module({
  controllers: [],
  providers: [SocketGateway, SocketService],
})
export class SocketModule {}

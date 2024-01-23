import { Module } from '@nestjs/common';
import { SocketGateway } from './socket/socket.gateway';
import { SocketService } from './socket/socket.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService, SocketGateway, SocketService],
})
export class AppModule {}

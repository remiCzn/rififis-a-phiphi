import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SocketService {
  constructor(private prisma: PrismaService) {}

  async getGame(gameId: number) {
    return await this.prisma.game.findUnique({
      where: {
        id: gameId,
      },
      select: {
        id: true,
        started: true,
        players: true,
      },
    });
  }

  async launchGame(gameId: number) {
    throw new NotImplementedException();
  }

  async insertPlayerToGame(gameId: number, playerId: number) {
    try {
      return await this.prisma.game.upsert({
        where: {
          id: gameId,
        },
        update: {
          players: {
            create: {
              userId: playerId,
            },
          },
        },
        create: {
          id: gameId,
          players: {
            create: {
              userId: playerId,
            },
          },
          started: false,
        },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        console.error(e.code, e.message);
      }
    }
  }
}

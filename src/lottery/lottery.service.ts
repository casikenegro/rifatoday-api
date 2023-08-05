import { Injectable } from '@nestjs/common';
import { CreateLotteryDto } from './dto/create-lottery.dto';
import { UpdateLotteryDto } from './dto/update-lottery.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { Lottery } from './entities/lottery.entity';

@Injectable()
export class LotteryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLotteryDto) {
    const totalTikes = data.totalTikes
    //delete data.totalTikes
    const lottery = await this.prisma.lottery.create({
      data: new Lottery({...data}),
    });
    let tickets: Ticket[]= [];
    for (let i = 0; i < totalTikes; i++) {
      tickets.push(new Ticket({
        userId:     1, // TODO add userId by token
        lotteryId:  lottery.id,
        assignedAt: lottery.init,
        number:     `${i}`.padStart(`${totalTikes}`.length,'0'),
        status:     `Disponible`, // Disponible, Comprado, Reservado, Inhabilitado
        winner: false,
      }));
    }
    await this.prisma.ticket.createMany({ data: tickets as any});
    return lottery;
  }

  findOne(id): Promise<Lottery | null> {
    return this.prisma.lottery.findUnique({
      where: { id },
    });
  }
  findAll(): Promise<Lottery[]> {
    return this.prisma.lottery.findMany();
  }

  update(id, data): Promise<Lottery> {
    return this.prisma.lottery.update({
      data,
      where: { id },
    });
  }

  remove(id): Promise<Lottery> {
    return this.prisma.lottery.delete({
      where: { id },
    });
  }
}


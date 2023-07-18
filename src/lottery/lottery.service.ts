import { Injectable } from '@nestjs/common';
import { CreateLotteryDto } from './dto/create-lottery.dto';
import { UpdateLotteryDto } from './dto/update-lottery.dto';
import { Lottery, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class LotteryService {
  constructor(private prisma: PrismaService) {}
  
  create(data: Prisma.LotteryCreateInput) {
    return this.prisma.lottery.create({
      data,
    });
  }
 
  findOne(id): Promise<Lottery | null> {
    return this.prisma.lottery.findUnique({
      where: { id },
    });
  }
  findAll(): Promise<Lottery[]> {
    return this.prisma.lottery.findMany();
  }

  update(id,data): Promise<Lottery> {
    return this.prisma.lottery.update({
      data,
      where:{id},
    });
  }

  remove(id): Promise<Lottery> {
    return this.prisma.lottery.delete({
      where:{id},
    });
  }
}
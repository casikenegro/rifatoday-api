import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket,Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.TicketCreateInput) {
    return this.prisma.ticket.create({
      data,
    });
  }

  findOne(id): Promise<Ticket | null> {
    return this.prisma.ticket.findUnique({
      where: { id },
    });
  }
  findAll(): Promise<Ticket[]> {
    return this.prisma.ticket.findMany();
  }

  update(id,data): Promise<Ticket> {
    return this.prisma.ticket.update({
      data,
      where:{id},
    });
  }

  remove(id): Promise<Ticket> {
    return this.prisma.ticket.delete({
      where:{id},
    });
  }
}

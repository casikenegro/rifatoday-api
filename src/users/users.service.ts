import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
 
  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }
 
  findOne(id): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }
  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  update(id,data): Promise<User> {
    return this.prisma.user.update({
      data,
      where:{id},
    });
  }

  remove(id): Promise<User> {
    return this.prisma.user.delete({
      where:{id},
    });
  }
}
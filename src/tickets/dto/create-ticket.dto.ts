import { ApiProperty } from '@nestjs/swagger';
import {  IsNotEmpty } from 'class-validator';

export class CreateTicketDto{
   @ApiProperty()
   @IsNotEmpty()
   assignedAt?: Date | string
   @ApiProperty()
   @IsNotEmpty()
   number: string
   @ApiProperty()
   @IsNotEmpty()
   status: string
   @ApiProperty()
   @IsNotEmpty()
   winner?: boolean
   user: any
   lottery:any
      
}

import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateLotteryDto {
  @ApiProperty({ required: true})
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ required: true})
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty()
  @IsUrl()
  image: string;
  @ApiProperty({ required: true})
  @IsNotEmpty()
  init: Date | string;
  @ApiProperty()
  end: Date | string;
  @ApiProperty({ required:true})
  @IsNumber()
  @IsInt()
  totalTikes: number;
}

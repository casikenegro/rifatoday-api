import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString, IsUrl } from "class-validator";

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
  @IsDate()
  init: Date;
  @ApiProperty()
  @IsDate()
  end: Date;
}

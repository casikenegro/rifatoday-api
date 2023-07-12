export class CreateLotteryDto {
  name: string;
  description: string;
  image: string;
  init?: Date;
  end?: Date;
}

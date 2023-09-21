import { CreateLotteryDto } from "../dto/create-lottery.dto";
import { UpdateLotteryDto } from "../dto/update-lottery.dto";

interface LotteryInterface { 
    name: string;
    description: string;
    image: string;
    init: Date | string;
    end: Date | string;
}
export class Lottery implements LotteryInterface{
    name: string;
    description: string;
    image: string;
    init: Date | string;
    end: Date | string;
    constructor(payload: CreateLotteryDto | UpdateLotteryDto){
      delete payload.totalTikes
      payload.init = new Date(payload.init).toISOString()
      if (payload.end){
        payload.end = new Date(payload.end).toISOString()
      }
      Object.assign(this,payload)
    }
}

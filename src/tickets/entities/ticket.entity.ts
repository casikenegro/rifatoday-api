export class Ticket {
    constructor(payload: Ticket){
        Object.assign(this,payload);
    }
    userId:     number
    lotteryId:  number
    assignedAt: Date
    number:     string
    status:     string // Disponible, Comprado, Reservado, Inhabilitado
    winner:     Boolean
}
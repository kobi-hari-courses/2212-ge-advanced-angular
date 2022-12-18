export class AdditionService {
    public id: number;

    constructor() {
        this.id = Math.ceil(Math.random() * 1000000);
    }

    add(n1: number, n2: number): number {
        return n1 + n2;
    }
}
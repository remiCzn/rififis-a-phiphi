export class Player {
    name: string
    alive: boolean
    sick: boolean
    connected: boolean

    constructor(name: string) {
        this.name = name;
        this.alive = true;
        this.sick = false;
        this.connected = true;
    }
}
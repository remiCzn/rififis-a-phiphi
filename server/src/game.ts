import {Player} from "./player";

export class GameState {
    weathers: Array<number>
    players: {[x: string]: Player}
    current_water: number
    current_wood: number
    current_food: number
    current_player: string
    turn_count: number
    started: boolean
    storm_day: number

    constructor() {
        this.weathers = [0,0,0,1,1,1,2,2,2,3,3].sort(() => 0.5 - Math.random())
        this.storm_day = 6 + Math.floor(Math.random() * 6)
        this.weathers = [
            ...this.weathers.slice(0,this.storm_day),
            2,
            ...this.weathers.slice(this.storm_day)
        ]
        this.players = {}
        this.current_food = 0
        this.current_water = 0
        this.current_wood = 0
        this.current_player = ""
        this.turn_count = -1
        this.started = false
    }
}
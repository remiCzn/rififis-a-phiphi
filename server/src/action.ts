import {GameState} from "./game";

abstract class PlayerAction {
    abstract play(game: GameState): void;
}

export class LoginAction extends PlayerAction {
    player_name: string

    constructor(player_name: string) {
        super()
        this.player_name = player_name
    }

    play(game: GameState): void {
    }


}

export class CollectFoodAction extends PlayerAction {
    play(game: GameState): void {
        const bag = [1, 1, 1, 2, 2, 3]
        const random_element = bag[Math.floor(Math.random()) * bag.length]
        game.current_food += random_element
    }

}

export class CollectWaterAction extends PlayerAction {
    play(game: GameState): void {
        let weather = game.weathers.at(game.turn_count)
        if (weather == undefined) {
            //Shouldn't happend
            return
        }
        game.current_water += weather
    }

}

export class CollectWood extends PlayerAction {
    draws: number

    constructor(draws: number) {
        super();
        this.draws = draws
    }

    play(game: GameState): void {
        const bag = [false, false, false, false, false, true]
        const selected = bag.sort(() => 0.5 - Math.random()).slice(0, this.draws)
        if(selected.includes(true)) {
            game.players[game.current_player].sick = true
        } else {
            game.current_wood += this.draws
        }
    }
}
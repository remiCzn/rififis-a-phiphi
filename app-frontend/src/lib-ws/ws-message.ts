export enum MessageType {
  LogIn = 'LogIn',
  FoodAction = 'CollectFood',
  WaterAction = 'CollectWater',
  WoodAction = 'CollectWood',
}

export type LogIn = {
  type: MessageType.LogIn
  player_name: string
}
export type FoodAction = { type: MessageType.FoodAction }
export type WaterAction = { type: MessageType.WaterAction }
export type WoodAction = { type: MessageType.WoodAction }

export type Message = LogIn | FoodAction | WaterAction | WoodAction

export function parseMessage(raw: string): Message {
  const data: Message = JSON.parse(raw)
  return data
}

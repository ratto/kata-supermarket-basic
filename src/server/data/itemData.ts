import { injectable } from "inversify";
import { Item } from "../types/Item.js"

const items: Item[] = [
  {
    id: '1',
    name: 'Item 1',
    description: 'An item'
  },
  {
    id: '2',
    name: 'Item 2',
    description: 'Other item'
  },
  {
    id: '3',
    name: 'Item 3',
    description: 'Another item'
  }
]

export interface IItemRepository {
  selectItems(): Promise<Item[] | undefined>;
  selectItem(): Promise<Item | undefined>;
}

@injectable()
export class ItemRepository implements IItemRepository {
  /**
   *
   */
  constructor() {}

  public selectItems = async (): Promise<Item[] | undefined> => {
    return items;
  }

  public selectItem = async (): Promise<Item | undefined> => {
    return undefined;
  }
}

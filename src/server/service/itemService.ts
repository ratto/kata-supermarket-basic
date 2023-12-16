/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IItemRepository, ItemRepository } from "../data/itemData.js";
import { Item } from "../types/Item.js";

/* export function getItems(): Item[] {
  const items: Item[] = data.selectItems();

  return items
}

export function getItemById(_: any, { id }: any, __: any, ___: any): Item | undefined {
  const item: Item | undefined = data.selectItemById(id)

  return item
} */

export interface IItemService {
  getItems(): Promise<Item[] | undefined>;
  getItem(): Promise<Item | undefined>;
}

export class ItemService implements IItemService {
  private data: IItemRepository;

  /**
   *
   */
  constructor() {
    const data: ItemRepository = new ItemRepository();

    this.data = data;
  }

  public getItems = async (): Promise<Item[] | undefined> => {
    return await this.data.selectItems();
  }

  public getItem = async (): Promise<Item | undefined> => {
    return await this.data.selectItem();
  }
}

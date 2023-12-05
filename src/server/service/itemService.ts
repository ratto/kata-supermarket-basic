/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as data from "../data/itemData.js"
import { Item } from "../types/Item.js";

export function getItems(): Item[] {
  const items: Item[] = data.selectItems();

  return items
}

export function getItemById(_: any, { id }: any, __: any, ___: any): Item | undefined {
  const item: Item | undefined = data.selectItemById(id)

  return item
}

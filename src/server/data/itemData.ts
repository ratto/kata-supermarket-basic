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

export function selectItems(): Item[] {
  return items
}

export function selectItemById(id: string): Item | undefined {
  return items.find(item => item.id == id)
}

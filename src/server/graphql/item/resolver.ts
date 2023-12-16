/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemService } from "../../service/itemService.js"

const service = new ItemService();

export const itemResolvers = {
  Query: {
    item: (/* parent: any, args: any, context: any, info: any */) => service.getItem(/* parent, args, context, info */),
    items: () => service.getItems()
  }
}

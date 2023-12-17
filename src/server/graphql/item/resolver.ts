/* eslint-disable @typescript-eslint/no-explicit-any */
import { IItemService } from "../../service/itemService.js"

let service: IItemService;

export const itemResolvers = {
  Query: {
    item: (/* parent: any, args: any, context: any, info: any */) => service.getItem(/* parent, args, context, info */),
    items: () => service.getItems()
  }
}

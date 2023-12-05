/* eslint-disable @typescript-eslint/no-explicit-any */
import * as service from "../../service/itemService.js"

export const itemResolvers = {
  Query: {
    item: (parent: any, args: any, context: any, info: any) => service.getItemById(parent, args, context, info),
    items: () => service.getItems()
  }
}

import { Container } from "inversify";
import { ItemRepository } from "./server/data/itemData";
import { ItemService } from "./server/service/itemService";

const container = new Container();

container.bind('IItemRepository').to(ItemRepository);
container.bind('ItemService').to(ItemService)

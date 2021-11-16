import { ExternalMenuLink } from './external-menu-link';

export enum MenuOptionTypes {
  Card = "card",
  Menu = "menu"
}

export interface MainMenuOption {
  name: String,
  type: MenuOptionTypes,
  content?: ExternalMenuLink[],
}

export class mainMenuOption implements MainMenuOption {
  public name = "";
  public type = MenuOptionTypes.Card;
}

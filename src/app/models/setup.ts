import { MainMenuOption } from "./main-menu-option";
import { QuickLink } from "./quick-link";

export interface Setup {
  quickLinks: QuickLink[],
  mainMenu: MainMenuOption[],
  tokenUrl: String,
}

export class setup implements Setup {
  quickLinks = [];
  mainMenu = [];
  tokenUrl = ""
}

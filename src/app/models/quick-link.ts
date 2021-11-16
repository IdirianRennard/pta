import { faIcon, FaIcon } from './fa-icon';

export interface QuickLink {
  name: String,
  icon: FaIcon,
  url: String,
}

class quickLink implements QuickLink {
  name = "";
  icon = new faIcon();
  url = "";
}

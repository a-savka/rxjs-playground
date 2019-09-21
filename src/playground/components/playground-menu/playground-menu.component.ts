import { Component } from "@angular/core";

import { pageDefinitions } from '../../pages';
import { PageDefinition } from '../../pages/page-definition.model';

@Component({
  selector: 'playground-menu',
  templateUrl: './playground-menu.component.html',
  styleUrls: [
    './playground-menu.component.scss'
  ]
})
export class PlaygroundMenuComponent {

  public items: PageDefinition[];

  constructor() {
    this.items = [ ...pageDefinitions ];
    this.items.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}

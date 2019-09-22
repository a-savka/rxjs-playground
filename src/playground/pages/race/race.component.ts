
import { Component, Injector } from '@angular/core';

import { race } from 'rxjs';

import { PlaygroundBase } from '../playground-base';


@Component({
  selector: 'race.app-page',
  templateUrl: './race.component.html',
  styleUrls: [
    './race.component.scss'
  ]
})
export class RaceComponent extends PlaygroundBase {

  constructor(
    injector: Injector
  ) {
    super(3, injector);
    this.result$ = race(
      this.sources$[0],
      this.sources$[1],
      this.sources$[2]
    );
  }

}

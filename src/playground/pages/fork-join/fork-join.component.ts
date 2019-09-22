
import { Component, Injector } from '@angular/core';

import { forkJoin } from 'rxjs';

import { PlaygroundBase } from '../playground-base';


@Component({
  selector: 'fork-join.app-page',
  templateUrl: './fork-join.component.html',
  styleUrls: [
    './fork-join.component.scss'
  ]
})
export class ForkJoinComponent extends PlaygroundBase {

  constructor(
    injector: Injector
  ) {
    super(3, injector);
    this.result$ = forkJoin(
      this.sources$[0],
      this.sources$[1],
      this.sources$[2]
    );
  }

}

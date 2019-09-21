
import { Component, Injector } from '@angular/core';

import { concatMap } from 'rxjs/operators';

import { PlaygroundBase } from '../playground-base';

@Component({
  selector: 'concat-map.app-page',
  templateUrl: './concat-map.component.html',
  styleUrls: [
    './concat-map.component.scss'
  ]
})
export class ConcatMapComponent extends PlaygroundBase {

  constructor(
    injector: Injector
  ) {
    super(0, injector);

    this.result$ = this.initialStream$.pipe(
      concatMap(() => this.createStream())
    );
  }

}

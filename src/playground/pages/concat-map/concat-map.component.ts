
import { Component } from '@angular/core';

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

  constructor() {
    super(0);

    this.result$ = this.initialStream$.pipe(
      concatMap(() => this.createStream())
    );
  }

}

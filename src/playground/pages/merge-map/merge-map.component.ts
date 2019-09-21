
import { Component, Injector } from '@angular/core';

import { mergeMap } from 'rxjs/operators';

import { PlaygroundBase } from '../playground-base';

@Component({
  selector: 'merge-map.app-page',
  templateUrl: './merge-map.component.html',
  styleUrls: [
    './merge-map.component.scss'
  ]
})
export class MergeMapComponent extends PlaygroundBase {

  constructor(
    injector: Injector
  ) {
    super(0, injector);

    this.result$ = this.initialStream$.pipe(
      mergeMap(() => this.createStream())
    );
  }

}

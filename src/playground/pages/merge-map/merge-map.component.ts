
import { Component } from '@angular/core';

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

  constructor() {
    super(2);
    this.result$ = this.sources$[0].pipe(
      mergeMap(() => this.sources$[1])
    );
  }

}

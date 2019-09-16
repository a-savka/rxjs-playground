
import { Component } from '@angular/core';

import { combineLatest } from 'rxjs/operators';

import { PlaygroundBase } from '../playground-base';


@Component({
  selector: 'combine-latest.app-page',
  templateUrl: './combine-latest.component.html',
  styleUrls: [
    './combine-latest.component.scss'
  ]
})
export class CombineLatestComponent extends PlaygroundBase {

  constructor() {
    super(2);
    this.result$ = this.sources$[0].pipe(
      combineLatest(this.sources$[1])
    );
  }

}

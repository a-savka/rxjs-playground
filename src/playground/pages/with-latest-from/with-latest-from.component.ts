
import { Component, Injector } from '@angular/core';

import { withLatestFrom } from 'rxjs/operators';

import { PlaygroundBase } from '../playground-base';

@Component({
  selector: 'with-latest-from.app-page',
  templateUrl: './with-latest-from.component.html',
  styleUrls: [
    './with-latest-from.component.scss'
  ]
})
export class WithLatestFromComponent extends PlaygroundBase {

  constructor(
    injector: Injector
  ) {
    super(1, injector);

    this.result$ = this.initialStream$.pipe(
      withLatestFrom(this.sources$[0])
    );
  }

}

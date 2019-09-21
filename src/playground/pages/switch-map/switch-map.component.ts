
import { Component, Injector } from '@angular/core';

import { switchMap } from 'rxjs/operators';

import { PlaygroundBase } from '../playground-base';

@Component({
  selector: 'switch-map.app-page',
  templateUrl: './switch-map.component.html',
  styleUrls: [
    './switch-map.component.scss'
  ]
})
export class SwicthMapComponent extends PlaygroundBase {

  constructor(
    injector: Injector
  ) {
    super(0, injector);

    this.result$ = this.initialStream$.pipe(
      switchMap(() => this.createStream())
    );
  }

}

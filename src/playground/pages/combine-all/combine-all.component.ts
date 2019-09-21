
import { Component, Injector } from '@angular/core';
import { combineAll } from 'rxjs/operators';

import { PlaygroundBase } from '../playground-base';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'combine-all.app-page',
  templateUrl: './combine-all.component.html',
  styleUrls: [
    './combine-all.component.scss'
  ]
})
export class CombineAllComponent extends PlaygroundBase {

  public customInitial$: Subject<Observable<any>>;

  constructor(
    injector: Injector
  ) {
    super(0, injector);

    this.customInitial$ = new Subject<Observable<any>>();
    this.result$ = this.customInitial$.pipe(
      combineAll()
    );
  }

  public emitCustom() {
    if (!this.customInitial$.isStopped) {
      this.customInitial$.next(this.createStream());
    }
  }

  public completeCustom() {
    this.customInitial$.complete();
  }

}

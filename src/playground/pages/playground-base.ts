
import { Subject, Observable } from 'rxjs';

export class PlaygroundBase {

  public sources$: Subject<any>[];
  public nextValues: number[];

  public result$: Observable<any>;

  constructor(sourceCount: number) {
    this.sources$ = [];
    this.nextValues = [];
    for (let idx = 0; idx < sourceCount; idx++) {
      this.sources$.push(new Subject<any>());
      this.nextValues.push(1);
    }
  }

  public emitValue(sourceIdx) {
    const value = `value ${this.nextValues[sourceIdx]++}`;
    this.sources$[sourceIdx].next(value);
  }

  public complete(sourceIdx) {
    this.sources$[sourceIdx].complete();
  }

}

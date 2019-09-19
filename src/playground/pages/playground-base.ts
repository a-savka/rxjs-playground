
import { Subject, Observable } from 'rxjs';

export class PlaygroundBase {

  public sources$: Subject<any>[];
  public nextValues: number[];

  public initialStream$: Subject<any>;
  public nextInitialValue: number;

  public result$: Observable<any>;

  constructor(sourceCount: number) {

    this.initialStream$ = new Subject<any>();
    this.nextInitialValue = 1;    this.sources$ = [];

    this.nextValues = [];
    for (let idx = 0; idx < sourceCount; idx++) {
      this.sources$.push(new Subject<any>());
      this.nextValues.push(1);
    }
  }

  public emitValue(sourceIdx) {
    const value = `v-${sourceIdx+1}-${this.nextValues[sourceIdx]++}`;
    this.sources$[sourceIdx].next(value);
  }

  public complete(sourceIdx) {
    this.sources$[sourceIdx].complete();
  }


  public emitInitialValue() {
    this.initialStream$.next(this.nextInitialValue++);
  }

  public completeInitial() {
    this.initialStream$.complete();
  }

  public createStream(): Observable<any> {
    const stream = new Subject<any>();
    this.sources$.push(stream);
    this.nextValues.push(1);
    return stream.asObservable();
  }

}

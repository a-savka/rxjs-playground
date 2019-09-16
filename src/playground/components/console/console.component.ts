import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: 'console',
  templateUrl: './console.component.html',
  styleUrls: [
    './console.component.scss'
  ]
})
export class ConsoleComponent implements OnInit, OnDestroy {

  @Input() public values$: Observable<(string | string[])>;
  @Input() public title: string;
  @Input() public canEmit: boolean;

  @Output() public emit: EventEmitter<void>;
  @Output() public complete: EventEmitter<void>;

  public values: (string | string[])[];
  private subscription: Subscription;

  constructor() {
    this.emit = new EventEmitter<void>();
    this.complete = new EventEmitter<void>();
    this.values = [];
  }

  public emitValue() {
    this.emit.emit();
  }

  public completeStream() {
    this.complete.emit();
  }

  public ngOnInit() {
    this.subscription = this.values$.subscribe(
      value => this.values.push(`Next value: ${value}`),
      error => this.values.push(`Error ${error}`),
      () => this.values.push('completed')
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

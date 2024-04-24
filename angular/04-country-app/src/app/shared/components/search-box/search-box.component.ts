import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  private debouncer: Subject<string> = new Subject<string>;
  private debouncerSuscription?: Subscription;

  @ViewChild('txtSearchInput')
  public searchInput!: ElementRef<HTMLInputElement>

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  emitValue(): void {
    const newSearch = this.searchInput.nativeElement.value;
    this.onValue.emit(newSearch);
    this.searchInput.nativeElement.value = '';
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }
}

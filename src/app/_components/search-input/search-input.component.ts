import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { GolazoModule } from '../../golazo.module/golazo.module';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [CommonModule,GolazoModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements ControlValueAccessor  {

  value: string = '';

  onChange: any = () => {};
  onTouch: any = () => {};

  @Input() forceLowerCase = true;

  /**
   * Evento emitido cuando se cambia la busqueda con debounce
   */
  @Output() onSearch = new EventEmitter<string>();
  /**
   * show loading indicator instead of search
   */
  @Input() loading = false;
  /**
   * Debounce time in ms before call onSearch() event, default to 500ms
   */
  @Input() debounceTime = 500;



  private searchEmitter = new Subject<string>();


  constructor() {
    this.searchEmitter.pipe(debounceTime(this.debounceTime)).subscribe((value) => {
      let emitValue = value;
      if(this.forceLowerCase){
        emitValue = emitValue.toLowerCase();
      }
      this.onSearch.emit(emitValue);
    });
  }

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouch();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

  onInputChange(value: string): void {
    this.value = value;
    this.searchEmitter.next(value);
  }

  reset() {
    this.writeValue('');
    this.onSearch.emit('');
  }
}

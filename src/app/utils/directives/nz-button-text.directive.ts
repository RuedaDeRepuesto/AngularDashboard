import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

@Directive({
  selector: '[nzButtonText]',
  standalone: true
})
export class NzButtonTextDirective implements AfterViewInit {

  constructor(private el:ElementRef<HTMLElement>) {
    el.nativeElement.classList.add('mobile-hidden');
  }

  ngAfterViewInit(): void {
  }

}

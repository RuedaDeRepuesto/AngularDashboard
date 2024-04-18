import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, Input, TemplateRef, ViewChild, ViewChildren, inject } from '@angular/core';
import { GolazoModule } from '../../golazo.module/golazo.module';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'golazo-header',
  standalone: true,
  imports: [
    CommonModule,
    GolazoModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{


  helper = inject(HelperService);

  @Input() title:string = 'UnNamed';
  @Input() desc:string|undefined;
  @Input() breadcrumb:{text:string,url:string}[] = [];
  @Input() tags:{text:string,color:string}[] = [];


  logout() {
  }

  ngAfterViewInit(): void {
    
  }

}

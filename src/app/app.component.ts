import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, inject, viewChild } from '@angular/core';
import { ActivatedRoute, EventType, Router, RouterModule, RouterOutlet } from '@angular/router';
import { GolazoModule } from './golazo.module/golazo.module';
import { Location } from "@angular/common";
import { HeaderComponent } from './_components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GolazoModule,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit{
  
  title = 'Dashboard - Golaço Training';
  currentRouterName = '';
  history: string[] = [];
  locationSrv = inject(Location);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  productName = 'Dashboard Angular';
  footerText = 'Someplace in the world';


  ngOnInit() {
    this.router.events.subscribe((e:any) => {

      const title = this.activatedRoute.root.firstChild?.snapshot.data['name']?? this.currentRouterName;
      this.currentRouterName = title;
    });
  }

  ngAfterViewInit(): void {
  }

  

  getYear() {
    const fecha = new Date();
    return fecha.getFullYear();
  }

}

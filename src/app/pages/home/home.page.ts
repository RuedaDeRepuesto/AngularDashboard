import { Component, OnInit } from '@angular/core';
import { GolazoModule } from '../../golazo.module/golazo.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    GolazoModule
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage implements OnInit {

  ngOnInit(): void {

  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mhp-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  mobile:boolean = window.innerWidth <= 600;
}

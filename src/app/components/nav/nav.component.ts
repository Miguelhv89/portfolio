import { Component, HostListener } from '@angular/core';
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
  mobile:boolean = false;
  text:string = 'MiguelDev'
  textStart:string = '<'
  textEnd:string = '/>'

  ngOnInit(): void {
    this.mobile = window.innerWidth <= 600;       
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.mobile = window.innerWidth <= 600;
  }
}

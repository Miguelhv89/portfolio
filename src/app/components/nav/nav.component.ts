import { Component, HostListener, Input } from '@angular/core';
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
  @Input() data: string[] = [];

  mobile:boolean = false;
  text:string = 'MiguelDev'
  textStart:string = '<'
  textEnd:string = '/>'
  linkActive: string = '';

  ngOnInit(): void {
    this.mobile = window.innerWidth <= 600;
    this.linkActive = this.data[0];
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.mobile = window.innerWidth <= 600;
  }
}

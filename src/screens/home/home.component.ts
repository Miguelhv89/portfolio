import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAboutMe, IHome } from 'src/common/interface/language.inteface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent {
  aboutme: IAboutMe = {}
  @Input() data: IHome = { aboutme: this.aboutme };
  ngOnInit(): void {
    this.aboutme = this.data.aboutme;    
  }
}

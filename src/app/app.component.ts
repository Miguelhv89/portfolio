import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { Title } from '@angular/platform-browser';
import { HomeComponent } from '@screen/home/home.component';
import { IHome, IInformation } from 'src/common/interface/language.inteface';
import esp from '../assets/language/esp.json'
// import en from '../assets/language/en.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    HomeComponent  
  ],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  information: IInformation;
  navigation: string[]= [];
  home: IHome;

  constructor(private titleService:Title){
    this.titleService.setTitle('<dev />Miguel HV');
    this.information = esp.information as IInformation;
    this.home = this.information.home
    this.navigation = this.information.navigation
  }
}

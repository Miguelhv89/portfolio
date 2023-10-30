import { Component, Input } from '@angular/core';
import { take, timer } from 'rxjs';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [],
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.sass']
})
export class TypewriterComponent {
  @Input() value: string = "";
  @Input() delay: number = 100;
  @Input() wrap: boolean = false;  

  textShow = ""
  constructor(){}

  ngOnInit(): void {
    const $timer = timer(this.delay, this.delay);
    $timer.pipe(take(this.value.length)).subscribe(
      () => {
        this.textShow += this.value.charAt((this.textShow.length -1) + 1);
      }
    )
  }
}

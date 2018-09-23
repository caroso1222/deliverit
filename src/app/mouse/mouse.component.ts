import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.scss']
})
export class MouseComponent implements OnInit, OnChanges {

  @Input()
  x: number;

  @Input()
  y: number;

  @Input()
  color = '#6526EA';

  pressed = false;

  shown = false;

  released = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.x && !changes.x.firstChange) {
      this.released = false;
      this.pressed = true;
      this.shown = true;
      setTimeout(() => {
        this.pressed = false;
        this.released = true;
        this.shown = false;
      }, 750);
    }
  }

}

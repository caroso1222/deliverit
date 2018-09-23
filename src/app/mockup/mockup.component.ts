import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mockup',
  templateUrl: './mockup.component.html',
  styleUrls: ['./mockup.component.scss']
})
export class MockupComponent implements OnInit {

  frontImage: string;
  backImage: string;
  transition: boolean;
  animate = true;

  @Input()
  get imageUrl(): string {
    return this.frontImage;
  }

  set imageUrl(val: string) {
    this.animate = true;
    if (!this.frontImage) {
      this.frontImage = val;
    } else {
      this.backImage = val;
      setTimeout(() => {
        this.transition = true;
        setTimeout(() => {
          this.animate = false;
          this.transition = false;
          this.frontImage = val;
        }, 500);
      }, 20);
    }
  }

  currentImageUrl: string;


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}

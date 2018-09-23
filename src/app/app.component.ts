import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

const DELIVER_STEPS = [
  'Ingresa como mensajero',
  'Revisa el estado de las estaciones',
  'Decide cuál paquete llevar'
];

const SEND_STEPS = [
  'Ingresa como usuario',
  'Programa tu pedido',
  'Revisa el estado de tu pedido'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imgUrl = '/assets/img/tripper-0.jpg';
  active: 'deliver' | 'send' = 'deliver';

  x;
  y;

  steps = DELIVER_STEPS;

  mouseColor: string;

  tripperSteps = [
    {
      index: 2,
      x: 100,
      y: 360,
      imgUrl: '/assets/img/tripper-1.jpg',
      color: '#ffffff'
    },
    {
      index: 3,
      x: 180,
      y: 160,
      imgUrl: '/assets/img/tripper-2.jpg'
    },
    {
      index: 1,
      x: 0,
      y: 0,
      imgUrl: '/assets/img/tripper-0.jpg',
      color: '#ffffff'
    },
    {
      index: 2,
      x: 100,
      y: 410,
      imgUrl: '/assets/img/seeker-1.jpg'
    },
    {
      index: 3,
      x: 183,
      y: 420,
      imgUrl: '/assets/img/seeker-2.jpg',
      color: '#ffffff'
    },
    {
      index: 1,
      x: 0,
      y: 0,
      imgUrl: '/assets/img/tripper-0.jpg',
      color: '#ffffff'
    },
  ];

  activeStep  = 1;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    let currentStep = 0;
    setInterval(() => {
      this.renderStep(this.tripperSteps[currentStep]);
      if (currentStep === 2) {
        this.active = 'send';
        this.steps = SEND_STEPS;
        console.log(this.steps);
        this.cdr.detectChanges();
      }
      currentStep++;
      if (this.tripperSteps.length === currentStep) {
        this.active = 'deliver';
        currentStep = 0;
        this.steps = DELIVER_STEPS;
      }
    }, 5000);
  }

  renderStep(step) {
    this.mouseColor = step.color || '#6526EA';
    this.x = step.x;
    this.y = step.y;
    setTimeout(() => {
      this.imgUrl = step.imgUrl;
      this.activeStep = step.index;
    }, 1250);
  }
}

import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel2',
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
  providers: [ NgbCarouselConfig ],
})
export class Carousel2Component {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  images : Array<String> = []

  ngOnInit() {
  }

}

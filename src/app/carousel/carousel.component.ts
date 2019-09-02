import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  imageSrc = [
    "https://static.runoob.com/images/mix/img_fjords_wide.jpg",
    "https://static.runoob.com/images/mix/img_nature_wide.jpg",
    "https://static.runoob.com/images/mix/img_mountains_wide.jpg"
  ]
  constructor() { }

  ngOnInit() {
  }

}

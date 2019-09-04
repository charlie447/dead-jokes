import { Component, OnInit } from '@angular/core';
// Vendor
import { faLaptop, faCircle, faRainbow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faLaptop = faLaptop;
  faCircle = faCircle;
  faRainbow = faRainbow;

  galleryItems = [
    "https://dummyimage.com/600x400/f3f3f3/000000.jpg",
    "https://dummyimage.com/600x400/f3f3f3/000000.jpg",
    "https://dummyimage.com/600x400/f3f3f3/000000.jpg",
    "https://dummyimage.com/600x400/f3f3f3/000000.jpg",
    "https://dummyimage.com/600x400/f3f3f3/000000.jpg",
    "https://dummyimage.com/600x400/f3f3f3/000000.jpg"
  ];
  constructor() { }

  ngOnInit() {
  }

}

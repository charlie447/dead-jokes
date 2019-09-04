import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pagePosition = 0;
  navShrink = false;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.pagePosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.pagePosition > 50) {
      // console.log(this.pagePosition);
      this.navShrink = true;
    } else {
      this.navShrink = false;
    }
  }
}

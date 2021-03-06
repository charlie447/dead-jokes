import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pagePosition = 0;
  navShrink = false;
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url != '/') {
          this.navShrink = true;
        } else {
          this.navShrink = false;
        }
        
      }
    })
   }

  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.pagePosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (this.pagePosition > 50 || this.router.url != '/') {
      
      this.navShrink = true;
    } else {
      this.navShrink = false;
    }
  }
}

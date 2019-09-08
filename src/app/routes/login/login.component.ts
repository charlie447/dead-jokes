import { Component, OnInit } from '@angular/core';
import { faGrinTears, faDizzy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faGrinTears = faGrinTears;
  faDizzy = faDizzy;
  constructor() { }

  ngOnInit() {
  }

}

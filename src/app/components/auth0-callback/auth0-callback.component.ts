import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth0-callback',
  templateUrl: './auth0-callback.component.html'
  
})
export class Auth0CallbackComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    //this.auth.
  }

}

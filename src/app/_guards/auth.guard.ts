import { Injectable } from '@angular/core';
import { CanActivate, RouterModule, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice: AuthService,
    private route: Router,
    private alertify: AlertifyService) { }

  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      console.log('return true');
      return true;
    } else {
      this.alertify.error('You shall not pass!!');
      this.route.navigate(['/home']);
      console.log('return false');
      return false;
    }
  }
  
}

import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Keycloak Angular Application Testing';

  constructor(private router: Router, private userService: UserService) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {

        if (userService.isAuthenticated()) {

          const exp = this.userService.currentUser.keycloakUser.refreshTokenParsed.exp;
          const iat = this.userService.currentUser.keycloakUser.refreshTokenParsed.iat;
          const timeWindow = (exp - iat) / 2;
          const now = Date.now() / 1000;

          if ((exp - timeWindow) < now) {
            this.userService.refreshToken()
              .then(response => {
                console.log('Updated token');
              })
              .catch(error => console.error(error));
          }
        }
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
    });

  }
}

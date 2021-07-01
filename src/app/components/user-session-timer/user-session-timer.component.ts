import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-session-timer',
  templateUrl: './user-session-timer.component.html',
  styleUrls: ['./user-session-timer.component.scss']
})
export class UserSessionTimerComponent implements OnInit {

  countDownTime: number = 0;

  constructor(public userService: UserService) {
    // Retreaving Session Time
    if (this.userService.isAuthenticated()) {
      this.countDownTime = this.userService.currentUser.keycloakUser.tokenParsed['exp'] - this.userService.currentUser.keycloakUser.tokenParsed['iat'];
    }
  }

  ngOnInit(): void {
  }

}

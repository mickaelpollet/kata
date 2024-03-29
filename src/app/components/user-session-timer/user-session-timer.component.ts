import { Component, OnInit } from '@angular/core';

// Services import
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-session-timer',
  templateUrl: './user-session-timer.component.html',
  styleUrls: ['./user-session-timer.component.scss']
})
export class UserSessionTimerComponent implements OnInit {

  public countDownTime = 0;

  constructor(public userService: UserService) {
    // Retreaving Session Time
    if (this.userService.isAuthenticated()) {
      const exp = this.userService.currentUser.keycloakUser.tokenParsed.exp;
      const now = Date.now() / 1000;
      this.countDownTime = exp - now;
    }
  }

  ngOnInit(): void {
    // Nothing to do
  }

}

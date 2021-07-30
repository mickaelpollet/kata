import { Component, OnInit } from '@angular/core';

// Services import
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-refresh-token-timer',
  templateUrl: './user-refresh-token-timer.component.html',
  styleUrls: ['./user-refresh-token-timer.component.scss']
})
export class UserRefreshTokenTimerComponent implements OnInit {

  public countDownTime = 0;

  constructor(public userService: UserService) {
    // Retreaving Session Time
    if (this.userService.isAuthenticated()) {
      const exp = this.userService.currentUser.keycloakUser.refreshTokenParsed.exp;
      const now = Date.now() / 1000;
      this.countDownTime = exp - now;
    }
  }

  ngOnInit(): void {
    // Nothing to do
  }

}

import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-user-session-timer',
  templateUrl: './user-session-timer.component.html',
  styleUrls: ['./user-session-timer.component.scss']
})
export class UserSessionTimerComponent implements OnInit {

  countDownTime: number         = 0;

  constructor(public securityService: SecurityService) {
    // Retreaving Session Time
    this.countDownTime = this.securityService.userIdentity.tokenParsed['exp'] - this.securityService.userIdentity.tokenParsed['iat'];
  }

  ngOnInit(): void {
  }

}

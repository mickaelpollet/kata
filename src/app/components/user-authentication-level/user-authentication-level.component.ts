import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-authentication-level',
  templateUrl: './user-authentication-level.component.html',
  styleUrls: ['./user-authentication-level.component.scss']
})
export class UserAuthenticationLevelComponent implements OnInit {

  authenticationLevel: number = 0;
  authenticationLevelColor: string[] = ["red", "orange", "yellow", "green"];
  authenticationLevelSmiley: string[] = ["sentiment_very_dissatisfied", "sentiment_satisfied", "sentiment_satisfied", "sentiment_very_satisfied"];
  authenticationStars = Array;

  constructor(public userService: UserService) {
    // Retreaving Authentication Level
    this.authenticationLevel = this.userService.currentUser.keycloakUser.tokenParsed['acr'];
  }

  ngOnInit(): void {
  }

}

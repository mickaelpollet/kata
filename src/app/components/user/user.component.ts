import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';

export class User {
  id: string ;
  login: string;
  mail: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  currentUser: any;
  currentUserProperties: any;

  currentUSerAllowOrigins: any;

  test: any;

  constructor(public SecurityService: SecurityService) {

    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
    this.currentUserProperties = Object.keys(this.currentUser);

    this.currentUSerAllowOrigins = JSON.stringify(this.currentUser["allowed-origins"])

    console.log(this.currentUser);
    this.test = JSON.stringify(this.currentUser);

  }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-token-user-informations',
  templateUrl: './token-user-informations.component.html',
  styleUrls: ['./token-user-informations.component.scss']
})
export class TokenUserInformationsComponent implements OnInit {

  userHasRole: boolean = false;

  constructor(public userService: UserService) {

    // if (this.currentUser.keycloakUser.hasOwnProperty('realmAccess')) {
    if (typeof this.userService.currentUser.keycloakUser.tokenParsed['resource_access'] !== 'undefined') {
      this.userHasRole = true;
    }
    // }



    // this.userService.currentUser.keycloakUser.tokenParsed['resource_access'].account.roles
  }

  ngOnInit(): void {
  }

}

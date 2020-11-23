import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-token-user-informations',
  templateUrl: './token-user-informations.component.html',
  styleUrls: ['./token-user-informations.component.scss']
})
export class TokenUserInformationsComponent implements OnInit {

  currentUser: any;

  constructor(public SecurityService: SecurityService) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
  }

  ngOnInit(): void {
  }

}

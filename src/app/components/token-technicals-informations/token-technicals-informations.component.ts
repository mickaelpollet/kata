import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-token-technicals-informations',
  templateUrl: './token-technicals-informations.component.html',
  styleUrls: ['./token-technicals-informations.component.scss']
})
export class TokenTechnicalsInformationsComponent implements OnInit {

  currentUser: any;

  constructor(public SecurityService: SecurityService) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Import des services
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-token-informations',
  templateUrl: './token-informations.component.html',
  styleUrls: ['./token-informations.component.scss']
})

export class TokenInformationsComponent implements OnInit {

  currentUser: any;

  constructor(public SecurityService: SecurityService, public dialog: MatDialog) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
  }

  openTokenDialog() {
    this.dialog.open(TokenInformationsDialog);
  }

  openRefreshTokenDialog() {
    this.dialog.open(RefreshTokenInformationsDialog);
  }

  openIDTokenDialog() {
    this.dialog.open(IdTokenInformationsDialog);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'token-informations-dialog',
  templateUrl: 'token-informations_token.component.html',
})
export class TokenInformationsDialog {

  currentUser: any;

  constructor(public SecurityService: SecurityService) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
  }
}

@Component({
  selector: 'refresh-token-informations-dialog',
  templateUrl: 'token-informations_refresh-token.component.html',
})
export class RefreshTokenInformationsDialog {

  currentUser: any;

  constructor(public SecurityService: SecurityService) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
  }
}

@Component({
  selector: 'id-token-informations-dialog',
  templateUrl: 'token-informations_id-token.component.html',
})
export class IdTokenInformationsDialog {

  currentUser: any;

  constructor(public SecurityService: SecurityService) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
  }
}
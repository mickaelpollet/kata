import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-token-informations',
  templateUrl: './token-informations.component.html',
  styleUrls: ['./token-informations.component.scss']
})

export class TokenInformationsComponent implements OnInit {

  //currentUser: any;

  constructor(public userService: UserService, public dialog: MatDialog) { }

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

  constructor(public userService: UserService) { }
}

@Component({
  selector: 'refresh-token-informations-dialog',
  templateUrl: 'token-informations_refresh-token.component.html',
})
export class RefreshTokenInformationsDialog {

  currentUser: any;

  constructor(public userService: UserService) { }
}

@Component({
  selector: 'id-token-informations-dialog',
  templateUrl: 'token-informations_id-token.component.html',
})
export class IdTokenInformationsDialog {

  currentUser: any;

  constructor(public userService: UserService) { }
}

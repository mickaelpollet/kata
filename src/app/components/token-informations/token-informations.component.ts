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

  constructor(public userService: UserService, public dialog: MatDialog) { }

  openTokenDialog(): void {
    this.dialog.open(TokenInformationsDialogComponent);
  }

  openRefreshTokenDialog(): void {
    this.dialog.open(RefreshTokenInformationsDialogComponent);
  }

  openIDTokenDialog(): void {
    this.dialog.open(IdTokenInformationsDialogComponent);
  }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-token-informations-dialog',
  templateUrl: 'token-informations_token.component.html',
})
export class TokenInformationsDialogComponent {

  currentUser: any;

  constructor(public userService: UserService) { }
}

@Component({
  selector: 'app-refresh-token-informations-dialog',
  templateUrl: 'token-informations_refresh-token.component.html',
})
export class RefreshTokenInformationsDialogComponent {

  currentUser: any;

  constructor(public userService: UserService) { }
}

@Component({
  selector: 'app-id-token-informations-dialog',
  templateUrl: 'token-informations_id-token.component.html',
})
export class IdTokenInformationsDialogComponent {

  currentUser: any;

  constructor(public userService: UserService) { }
}

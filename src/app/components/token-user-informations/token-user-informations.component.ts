import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-token-user-informations',
  templateUrl: './token-user-informations.component.html',
  styleUrls: ['./token-user-informations.component.scss']
})
export class TokenUserInformationsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

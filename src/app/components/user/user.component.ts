import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

export class User {
  id: string;
  login: string;
  mail: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  currentUserAllowOrigins: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

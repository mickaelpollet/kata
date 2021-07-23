import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public pageTitle = 'Admin Page';
  public pageSubject = 'Admin Page';
  public pageMenuColor = '#424242';
  public userFirstName: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

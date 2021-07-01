import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  page_title: string = "Admin Page";
  page_subject: string = "Admin Page";
  page_menu_color: string = "#424242";
  userFirstName: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

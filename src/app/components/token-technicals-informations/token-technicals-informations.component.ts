import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-token-technicals-informations',
  templateUrl: './token-technicals-informations.component.html',
  styleUrls: ['./token-technicals-informations.component.scss']
})
export class TokenTechnicalsInformationsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}

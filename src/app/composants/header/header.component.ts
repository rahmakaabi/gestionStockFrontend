import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {UtilisateurDto} from "../../models/utilisateur-dto";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  connectedUser: UtilisateurDto = {};

  constructor(private userService: UserService) {
  }



}

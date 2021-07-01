import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services Import
import { UserService } from '../services/user.service';
import { ErrorService } from '../services/error.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public route: Router,
    public userService: UserService,
    public errorService: ErrorService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let userRoles: Array<string> = [];
    let userGroups: Array<string> = [];
    let userAttributes: Array<string> = [];

    let accessInformations = next.data;

    if (accessInformations.hasOwnProperty('roles')) {
      userRoles = accessInformations.roles;
    }

    if (accessInformations.hasOwnProperty('groups')) {
      userGroups = accessInformations.groups;
    }

    if (accessInformations.hasOwnProperty('attributes')) {
      userAttributes = accessInformations.attributes;
    }

    // Préparation des données
    let authorizationAccess: boolean = false;

    // Parcours des Rôles donnés sur la route
    for (let currentRole of userRoles) {
      // Test du rôle vis à vis de l'identité de l'utilisateur
      if (this.userService.hasRealmRole(currentRole) || this.userService.hasResourceRole(currentRole)) {
        authorizationAccess = true;
      }
    }

    // Parcours des attributs donnés sur la route
    for (let currentGroup of userGroups) {

      console.log(currentGroup);
      // Test de l'existance de l'attribut pour l'utilisateur
      if (this.userService.hasGroup(currentGroup)) {
        authorizationAccess = true;
      }
    }

    // Parcours des attributs donnés sur la route
    for (let currentAttrubute of userAttributes) {
      // Test de l'existance de l'attribut pour l'utilisateur
      if (this.userService.hasAttribute(currentAttrubute)) {
        authorizationAccess = true;
      }
    }

    // Interpretation du status d'autorisation
    if (authorizationAccess === true) {       // SI le status est positif...
      return true;                            // On autorise l'accès
    } else {                                  // SINON...
      this.errorService.errorMessage = "Not enough right";  // Ajout du message d'erreur dans le service de gestion d'erreurs
      this.route.navigate(['/error']);       // On redirige vers la page d'erreur
      return false;                           // On renvoie le status négatif
    }

  }
}

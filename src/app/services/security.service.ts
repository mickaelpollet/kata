import { Injectable } from '@angular/core';

// Keycloak Library Import
import { KeycloakInstance } from 'keycloak-js';

// Environnment Variables Import
import { environment } from '../../environments/environment';

// Service Import
import { UserService } from "./user.service";

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  public userIdentity: KeycloakInstance = {} as KeycloakInstance;

  constructor(private userService: UserService) { }

  async init() {

    console.log('Security initialization...');

    this.userIdentity = new Keycloak({
      url: environment.KeycloakConfig.url,
      realm: environment.KeycloakConfig.realm,
      clientId: environment.KeycloakConfig.clientId
    });

    await this.userIdentity.init({
      onLoad: 'check-sso',                  // login-required: L'utilisateur s'authentifie immédiatmeent / check-sso : L'utilisateur n'a pas besoin d'être authentifié initialement
      checkLoginIframe: false,              // Set to enable/disable monitoring login state (default is true).
      // checkLoginIframeInterval           // Set the interval to check login state (default is 5 seconds).
      // seNonce: true                      // Adds a cryptographic nonce to verify that the authentication response matches the request (default is true).
      // silentCheckSsoRedirectUri          // Set the redirect uri for silent authentication check if onLoad is set to 'check-sso'.
      // silentCheckSsoFallback             // Enables fall back to regular check-sso when silent check-sso is not supported by the browser (default is true).
      // token                              // Set an initial value for the token.
      // refreshToken                       // Set an initial value for the refresh token.
      // idToken                            // Set an initial value for the id token (only together with token or refreshToken).
      // timeSkew                           // Set an initial value for skew between local time and Keycloak server in seconds (only together with token or refreshToken).
      // responseMode                       // Set the OpenID Connect response mode send to Keycloak server at login request. Valid values are query or fragment. Default value is fragment, which means that after successful authentication will Keycloak redirect to JavaScript application with OpenID Connect parameters added in URL fragment. This is generally safer and recommended over query.
      // flow                               // Set the OpenID Connect flow. Valid values are standard, implicit or hybrid.
      // enableLogging                      // Enables logging messages from Keycloak to the console (default is false).
      // pkceMethod                         // The method for Proof Key Code Exchange (PKCE) to use. Configuring this value enables the PKCE mechanism. Available options: "S256" - The SHA256 based PKCE method
    });

    // User instanciation
    await this.userService.init(this.userIdentity);
  }
}

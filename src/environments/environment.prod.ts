export const environment = {
  production: true,
  KeycloakConfig: {
    url: 'https://keycloak.poudlard.net/auth/',
    realm: 'test_realm',
    clientId: 'kata',
    clientSecret: '',
    scope: 'openid profile email'
  },
  appName: 'Keycloak Angular Testing Application',
  appNameAcronym: 'KATA',
  appUrl: 'https://kata.poudlard.net:4443'
};

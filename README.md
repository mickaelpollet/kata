# KATA : Keycloak Angular Testing Application

Angular application for testing Keycloak environment by OpenID Connect sessions.

## Perequisites

- Install a `Keycloak` environnment
- Create a `Keycloak Realm`
- Create a `Keycloak Client` in your Realm
- Add the following URL in your Keycloak Client configuration `https://kata.poudlard.net:4443/*`

## Installation

### Adding Host

#### For Windows

- Open your resolver configuration file `C:\Windows\System32\drivers\etc\hosts`
- Adding the line `127.0.0.1	kata.poudlard.net`

#### For Debian

- Open your resolver configuration file `/etc/hosts`
- Adding the line `127.0.0.1	kata.poudlard.net`

### Install dependancies

On your KATA project folder

`npm install`

### Configuring KATA

#### For dev

- Open `kata\src\environnments\environnemen.ts`
- Change `url` `realm` `clientId` `clientSecret` values

#### For prod

- Open `kata\src\environnments\environnemen.prod.ts`
- Change `url` `realm` `clientId` `clientSecret` values

## Getting started

- Run the command `ng serve --open --ssl true --host kata.poudlard.net --port 4443`
- Navigate to `https://kata.poudlard.net:4443/`
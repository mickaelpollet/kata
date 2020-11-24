# KATA : Keycloak Angular Testing Application

Angular application for testing Keycloak environment by OpenID Connect sessions.

## Perequisites

- Install a Keycloak environnment
- Create a Keycloak Realm
- Create a Keycloak Client in your Realm
- Add the following URL in your Keycloak Client configuration `https://kata.poudlard.net:4443/*`

## Installation

### Adding Host

- Open your resolver configuration file

#### For Windows

`C:\Windows\System32\drivers\etc\hosts`

#### For Debian

`/etc/hosts`

- Adding the following line
=> `127.0.0.1	kata.poudlard.net`

### Install dependancies

On your KATA project folder

`npm install`

### Configuring KATA

#### For dev

- Open `kata\src\environnments\environnemen.ts`

#### For prod

- Open `kata\src\environnments\environnemen.prod.ts`

- Change `url` `realm` `clientId` `clientSecret` values

## Getting started

Run the following command :

`ng serve --open --ssl true --host kata.poudlard.net --port 4443`

Navigate to `https://kata.poudlard.net:4443/`.
# Monorepo Open Street Map (Next JS + Expo React Native)

This is a example project to implement OPEN STREET MAP with monorepo architecture using [Turborepo](https://turborepo.org/) and implement with
web next js and react native expo.

## What's inside?

Features:

Web:

1. React leaftlet map 
2. Search geolocation

Mobile:

1. Webview map leaflet

## Setup Project

Run the following command:

1. clone this repository

```sh
git clone https://github.com/mowoka/monorepo_osm.git
```

2. on root project run this command

```sh
yarn install
```

3. on inside apps/native run this command

```sh
yarn install
```

4. on inside apps/web run this command

```sh
yarn install
```

5. you can run the project by run this command

- web

```sh
yarn run dev
```

- mobile

```sh
yarn expo start
```

### Next Features

1. Map multiple markers
2. Map clustering

### Result & Preview

Web

<img width="1680" alt="Screenshot 2025-01-05 at 23 18 12" src="https://github.com/user-attachments/assets/e8001d44-de2a-4f39-8cac-0feda5ae6380" />

Mobile

<img width="410" alt="Screenshot 2025-01-05 at 23 18 34" src="https://github.com/user-attachments/assets/c7b88fe5-7659-46fb-849c-980813b3c545" />


### Support Doc Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting

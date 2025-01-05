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

### Support Doc Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting

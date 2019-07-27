# Ki.CL | Skeleton
A basic skeleton template to jump start a project with `Webpack`, `React`, `SASS`, `TypeScript`. This project is still evolving, so random changes will occur.

## Quick Start
Run:
```
npm i && npm run dev
```
## Build and launch the app in development environment:
```bash
npn run dev
```
In development, localhost run with [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

## Build and launch the app in production environment:
```bash
npn run prod
```
In Production, localhost run with [BrowserSync](https://github.com/BrowserSync/browser-sync)

## Launch a [bundle analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) while the app run:
```bash
npn run dev -- --env.analyzer
```
```bash
npn run prod -- --env.analyzer
```
## Launch the app without watching changes on sources:
```bash
npn run dev -- --env.noWatch
```
```bash
npn run prod -- --env.noWatch
```
## Launch the app without launching the app in browser:
```bash
npn run dev -- --env.noBrowser
```
```bash
npn run prod -- --env.noBrowser
```
## Test
To run test, simple run:
```bash
npm run test -- -u --detectOpenHandles
```
### Coverage ###
```bash
npm run test:cover -- -u --detectOpenHandles
```
Coverage is also hook up with `git push`, mean each time a `git push` happen, `test:cover` task is then trigger before the `push`

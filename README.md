## Getting Started

First, run the storybook server:
```bash
yarn install
#
yarn storybook
```
Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.


## Scaffold a new component to build

```bash
yarn scaffold
```
Answer terminal questions for new component. Consistant directory structure for /common for common components.


## Build component library for npm package use

```bash
yarn build
```
Builds and compiles tsx into js and scss into css for ease of use when installing package to use component library.


## Publishing new npm package

```bash
npm version <update_version>
# then
npm publish
```
Publishing components to npm.


## Manual push to Chromatic to view Storybook
```bash
yarn chromatic
```
Deploys to Chromatic and generates a storybook url to view components.
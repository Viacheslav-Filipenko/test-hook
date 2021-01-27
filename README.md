# SMB react components library

## Quick start

```bash
git clone https://gitlab.xailabs.com/smb/mui-component-library.git
npm install
npm run start
```

## Introduction

This is a components library for sharing react components via GitLab

## Important notes

All the components which using material ui components should be exported with withStylesInjectedFirst HOC,
so the component will not redefine the other material ui components styles via the injecting style tag.

## Using library

In order to use the library in other projects install it as dependency.

### npm

```bash
npm i --save git+https://gitlab.xailabs.com/smb/mui-component-library.git
```

### yarn

```bash
yarn add  git+https://gitlab.xailabs.com/smb/mui-component-library.git
```

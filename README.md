# TypeScript Setup Guide

## First Steps

### 1. Globally Installing TypeScript
To install TypeScript globally on your machine, run the following command:

```bash
npm install -g typescript
```

### 2. Check TypeScript Version
After installation, verify the installed version of TypeScript:

```bash
tsc -v
```

## Second Step: Setting Up tsconfig.json

### 1. Initialize tsconfig.json
To create a tsconfig.json file (TypeScript configuration file), run:
```bash
tsc --init
```
### 2. Configure tsconfig.json
Open the tsconfig.json file and make the following changes:

Uncomment the outDir line to specify the output directory for compiled JavaScript files:
```bash
"outDir": "./dist"
```

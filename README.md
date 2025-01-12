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
- Open the tsconfig.json file and make the following changes:

[x] Uncomment the outDir line to specify the output directory for compiled JavaScript files:
```bash
"outDir": "./dist"
```
[x] Uncomment the rootDir line to specify the source directory for TypeScript files:
```bash
"rootDir": "./src"
```
[x] Change the target to ES6 for modern JavaScript features:
```bash
"target": "ES6"
```


## Example: Adding Two Numbers
### Here’s a simple TypeScript program to add two numbers:

```typescript
const sum = (x: number, y: number): void => {
  console.log(x + y);
};

sum(2, 4); // Output: 6
```


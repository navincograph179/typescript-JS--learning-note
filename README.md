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

### 3. Handling Errors in TypeScript
Prevent JavaScript File Generation on Errors
To ensure TypeScript does not generate .js files if there are errors, set noEmitOnError to true in your tsconfig.json:

```bash
"noEmitOnError": true
```

> [!NOTE]
> 2025-01-13

## Type Annotation in TypeScript
Type annotation is a way to explicitly specify the type of a variable, function parameter, or function return value. This makes your code more predictable and easier to understand.

- For Examples. 
 1. Variable with Type Annotation:
 ```typescript 
 let age: number = 25; // `age` must always be a number
 ```
 2. Function with Type Annotations:
 ```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
  - The <ins>name</ins> parameter must be a string.
  - The function will return a <ins>string</ins>.

 > [!IMPORTANT]
 > TypeScript compiler (tsc) that automatically recompiles your TypeScript files into JavaScript whenever you make   changes to your .ts files.
 ```bash
 tsc --watch
 ```
 or shorthand:
 ```bash
 tsc -w
 ```
 ![Uploading スクリーンショット 2025-01-13 001617.png…]()


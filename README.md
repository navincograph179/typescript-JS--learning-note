# FIRST STEP
## Globally instaliing TypeScript

```bash
npm install -g typescript
```
## To Check TypeScript Version

```bash
tsc -v
```
# SECOND STEP
## install tsconfig.json file
```bash
tsc --init
```
## Inside the `tsconfig.json` file
### uncomment those code lines
```bash
 "outDir": "./dist"
 ```
 ### for js file

 ```bash
  "rootDir": "./src"
  ```
### for ts file

### also change the `target` into ES6
```bash
 "target": "ES6"
```


## 20250109

1. Write a program to add two numbers.
```
const sum = (x:number,y:number) =>{
  console.log(x+y);
}

```

sum(2, 4)

2. How to catch Errors. & solve it?
3. Ts Configuration File.




# 📦 Project 1 — Simple REST API

This project sets up a basic RESTful API using **Express.js** and **Prisma ORM** in a **Node.js** backend, written in **TypeScript**.

---

## 1. Initialize the Project
This command creates the package.json file.

```bash
yarn init -y 
```

## 2. Install Dependencies
Install runtime and development dependencies:

This adds the node_modules and yarn.lock
```bash
yarn add @prisma/client express
```

```bash
yarn add --dev @types/express @types/node nodemon prisma ts-node typescript
```

## 3. In the package.json
Add the following script in line 6:
```json
  "scripts": {
    "dev": "nodemon src/index",
    "migrate": "prisma migrate dev"
  },
```

These scripts let you run short commands like yarn dev or yarn migrate instead of typing longer ones.

🔁 "dev": "nodemon src/index"
    ✅ What it does:
    - Runs your app using Nodemon, which watches your files for changes and automatically restarts the server.
    - The file it runs is: src/index.ts

📦 "migrate": "prisma migrate dev"
    ✅ What it does:
    - Runs a Prisma migration using your schema.prisma.
    - It:
        - Generates or updates the database schema
        - Applies new changes to the database
        - Updates the Prisma Client (@prisma/client)

## 4. Create the tsconfig.json file
Add the following configuration to your tsconfig.json file:

```json
{
    "compileOnSave": false,
    "compilerOptions": {
        "target": "es2017",
        "lib": [
            "es2017",
            "esnext.asynciterable"
        ],
        "typeRoots": [
            "node_modules/@types"
        ],
        "allowSyntheticDefaultImports": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "forceConsistentCasingInFileNames": true,
        "moduleResolution": "node",
        "module": "commonjs",
        "pretty": true,
        "sourceMap": true,
        "declaration": true,
        "outDir": "dist",
        "allowJs": true,
        "noEmit": false,
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "baseUrl": "src"
    },
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```
## 5. Create the database
You should get the prisma schema file, .env and .gitignore
``` bash
npx prisma init --datasource-provider sqlite
```

## 6. In the schema.prisma file
```
model Author {
  id String @id @default(uuid())
  name String 
  book Book[]
}

model Book{
  id String @id @default(uuid())
  author Author @relation(fields: [authorId], references: [id])
  authorId String
  title String
}
```

## 7. Upload changes to the database
```bash
yarn migrate
```

enter a name for the new migration: init_db

## 8. Create index
new file
src/index.ts

```typescript
import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())

app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})
```

## 9. Test endpoint
See if it works. Go to localhost:8080/ping
you should see somehting like {"message":"pong"}

```typescript
app.get('/ping', (req, res)=>{
    res.json({message: "pong"}).status(200)
})
```

## 10. Create folders
In src create the following folder:
- controllers
- routes

## 11. In the controllers folder
Create a new file called author.controller.ts
Create a new file called book.controller.ts
(code in the file)

## 12. In the routes folder 
Create a new file called author.router.ts
Create a new file called book.router.ts
(code in the file)

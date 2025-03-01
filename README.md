This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Dev 

 run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) , works fine.

## Build
```npm run build```

bug: build generates 0 B files for parellel routes only when there's a catch all route exists

### build with catch all and parallel route slot with dynamic segment

<img width="619" alt="catch-all-dynamic" src="https://github.com/user-attachments/assets/b18543f0-f8df-4c25-b4d4-f30d47b4c5af" />

### build without catch all segment

<img width="619" alt="no-catch-all" src="https://github.com/user-attachments/assets/2e891e33-5563-481c-b717-9cb9d13bf473" />

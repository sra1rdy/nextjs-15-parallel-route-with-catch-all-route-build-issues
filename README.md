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

<img width="615" alt="slot-dynamic" src="https://github.com/user-attachments/assets/e33bc660-b0f0-482b-a1b9-0f76b9d14104" />

### build without catch all segment

<img width="619" alt="no-catch-all" src="https://github.com/user-attachments/assets/2e891e33-5563-481c-b717-9cb9d13bf473" />

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

<img width="603" alt="build-fail-parallel-w-catch-all" src="https://github.com/user-attachments/assets/7a3508e1-6837-49fe-a46b-a06c6f25b0ef" />

<img width="603" alt="build-wo-catch-all-route" src="https://github.com/user-attachments/assets/a257ae6c-cdcb-43e5-9d3a-f9e8ac274e23" />

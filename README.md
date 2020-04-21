This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

# NextJS Demo

## Setup

1. Install dependencies
```
npm install
```

2. Create a Sentry project and configure Sentry with your `SENTRY_DSN` in `.env` and include this in `_app.js`
3. Include your `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, and `SENTRY_PROJECT` to the `Makefile`. If you haven't created an Auth Token, you can create one from your Sentry organization on the [API Keys](https://sentry.io/settings/account/api/auth-tokens/) page 
4. Make sure that your GitHub repo is integrated into your Sentry organization.

## Run
5. Run the dev server
```
$ PORT=3001 npm run dev
```

## Source Maps
6. Run build script to generate source maps. 
```
npm run build
```

7. Manually upload source maps
```
make upload_sourcemaps
```

8. (Production only) Use the Sentry Webpack Plugin



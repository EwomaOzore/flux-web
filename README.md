# Flux

Marketing site for Flux, a personal payday planner. See exactly what’s left after every bill is paid. Budget data stays on the device.

Built with Next.js. Public site: [fluxbudget.app](https://fluxbudget.app).

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/product` | Features |
| `/how-it-works` | Four steps |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/faq` | Short answers |
| `/download` | iOS and Android |
| `/support` | Store-listing support |
| `/sources` | Canonical page sources |
| `/brand` | Brand sheet (noindex) |

Also published: `/sitemap.xml`, `/robots.txt`, `/llms.txt`.

## Environment

Set these when the store listings go live:

- `NEXT_PUBLIC_SITE_URL` — defaults to `https://fluxbudget.app`
- `NEXT_PUBLIC_APP_STORE_URL`
- `NEXT_PUBLIC_PLAY_STORE_URL`

Until those URLs are set, store buttons go to `/download`.

# traveler.teelmo.info

An interactive [Highcharts](https://www.highcharts.com/) orthographic globe marking every country visited, with individual cities pinned and labelled.

**Live**: https://traveler.teelmo.info

## Tech stack

- [Vite](https://vitejs.dev/) + React 19
- [Biome](https://biomejs.dev/) for formatting/linting
- [@teelmo/web-styles](https://github.com/teelmo/web-tools) for the shared CSS reset/basics
- Highcharts Maps, with the world boundaries loaded at runtime from `public/assets/data/`

## Development

```
npm install
npm start
```

Opens at http://localhost:8080.

## Build

```
npm run build
```

## Deploy

```
npm run push            # push to GitHub
npm run sync-gh-pages   # publish dist/ to the gh-pages branch
npm run sync-prod       # pull the latest commit on the teelmo.info server
```

`sync-prod` pulls the repo directly on the server, which serves `dist/` as-is (no build step there) — so `dist/` is committed here, unlike a typical Vite project.

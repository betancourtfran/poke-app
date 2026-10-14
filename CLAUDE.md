# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the dev server (http://localhost:3000)
- `npm run build` — production build to `build/`
- `npm test` — run tests in watch mode; press `a` to run all, or type a filename pattern to run a single file
- `CI=true npm test` — run the suite once, non-interactively (useful for a one-shot pass)

Both `start` and `build` set `NODE_OPTIONS=--openssl-legacy-provider` via `cross-env` because this is Create React App 4 (react-scripts 4) running on a modern Node/OpenSSL. Do not remove that flag or the webpack build will fail with an OpenSSL digest error.

## Architecture

Create React App + TypeScript single-page app that searches the public [PokéAPI](https://pokeapi.co/). There is no backend and no router library — data and navigation are hand-rolled.

**Data flow.** `src/App.tsx` is the only stateful component (a class component holding all state). On mount it calls `getPokemons()` to load the full name list (`?limit=1000`) into `allPokemons`. The search box is debounced (300ms, via a `searchTimeout` kept in state) and calls `filterPokemon(allPokemons, value)`. All API access lives in `src/services/request.tsx`:
- `getPokemons()` fetches the lightweight name/url list.
- `filterPokemon()` regex-matches names locally, then calls `fetchPokemonsInfo()` which fans out one `getPokemon()` request per match via `Promise.all` to hydrate full detail (sprites, types, weight, abilities). This means a broad search term triggers many parallel requests.

**Known rough edges in `App.tsx`** (relevant if touching search): `handleSubmit`/`handleChange` compute `filterPokemon(...)` but the resulting promise is never written back to `this.state.pokemons` (the `setState` calls are commented out / missing), so results don't currently render on search. `pokemonFound` is also passed through inverted. Treat wiring search results into state as the likely intent of in-progress work.

**Component convention.** Each component lives in `src/components/<Name>/` with the implementation in `<Name>.tsx` and a sibling `index.tsx` that re-exports it (`export { default as <Name> } from './<Name>'`). `src/components/index.tsx` is the barrel that re-exports every component, so import from `'../'` / `'./components'` rather than reaching into files directly. Follow this pattern when adding a component.

**Styling.** SCSS Modules — each component imports `./<Name>.module.scss` and references classes as `style.foo`. `sass` is a direct dependency (no node-sass).

## Testing

Tests use the CRA Jest runner plus **Enzyme** with the React 16 adapter (configured in `src/setupTests.tsx`). Existing tests use `shallow()` and assert on component presence (e.g. `wrapper.find(SearchBar)`). Test files are colocated as `<Name>.test.tsx`.

## Notes / gotchas

- Mixed `.tsx` and `.jsx`: `components/Route/Route.jsx`, `components/Link/Link.jsx`, and `components/Pokemon/index.jsx` are plain JSX and outside the typed component convention. `Route.jsx` imports from `../Context/navigation`, which does **not** exist in the repo — that navigation context is unfinished, so `Route` is not wired up.
- UI copy is mixed English/Spanish (e.g. "Resultados de la busqueda"). Match whatever the surrounding component already uses.
- API responses are typed as `any` throughout (`IPokemon` fields are `any`); there is no shared typed model for PokéAPI data.

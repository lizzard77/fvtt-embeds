# pmvtt

Development setup:

1. run Foundry VTT nodejs version (we will assume it's on the default port 30000)
2. start `npm run dev` from your terminal or VSCode
3. open Foundry VTT in your browser, BUT USE PORT 30001. 

## How the dev setup works

The browser connects to the Vite dev server on port 30001. Everything except the current module's code is proxied to Foundry VTT on port 30000. This way, the new code is "injected" an hot reloading works properly. See `vite.config.js` for details.

## Debugging

A sample launch.json is added for F5 debugging with VSCode

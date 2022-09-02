dev: 
  yarn dev:watch

start: 
  PORT=4000 yarn build && yarn start


typecheck: 
  yarn typecheck --watch

wasm:
  yarn build-wasm && yarn link-wasm


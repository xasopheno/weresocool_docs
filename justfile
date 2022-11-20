dev: 
  yarn dev:watch

start: 
  yarn build && PORT=4000 yarn start


typecheck: 
  yarn typecheck --watch

wasm:
  yarn build-wasm && yarn link-wasm


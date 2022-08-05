dev: 
  yarn dev:watch

start: 
  yarn build && yarn start


typecheck: 
  yarn typecheck --watch

wasm:
  yarn build-wasm && yarn link-wasm


# Boilerplate for solidity-based on-chain art

## INSTALL

```bash
pnpm i
```

## run a node, a web server and a contract deployer (automatic on code changes)

```bash
pnpm geth:dev
```

You can then navigate on [http://localhost:8080](http://localhost:8080)

it will pick the last ERC721 transfer event and display the corresponding token

You can also specify a specifc token this way: `http://localhost:8080#<contract address>_<token id>`

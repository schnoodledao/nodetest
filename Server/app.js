'use strict'

const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");
const fastify = require('fastify')
const foo = require('./foo/foo.json');

const credential = new DefaultAzureCredential();
const url = "https://" + process.env.KEY_VAULT_NAME + ".vault.azure.net";
const client = new SecretClient(url, credential);

function build(opts = {}) {
  const app = fastify(opts);
  app.get('/Alive', async (request, reply) => {
    const secret = await client.getSecret('bridgePrivateKey');
    return sendReply(reply, {status: 'ok', foo, secret})
  });
  return app;
}

function sendReply(reply, status, body) {
  reply
    .header('Access-Control-Allow-Origin', '*')
    .send({ status, body });
}

module.exports = build

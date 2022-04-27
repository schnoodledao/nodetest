'use strict'

const fastify = require('fastify')
const foo = require('./foo/foo.json');

function build(opts = {}) {
  const app = fastify(opts);
  app.get('/Alive', async (request, reply) => sendReply(reply, {status: 'ok', foo}));
  return app;
}

function sendReply(reply, status, body) {
  reply
    .header('Access-Control-Allow-Origin', '*')
    .send({ status, body });
}

module.exports = build

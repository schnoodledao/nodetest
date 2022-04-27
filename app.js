'use strict'

const fastify = require('fastify')

function build(opts = {}) {
  const app = fastify(opts);
  app.get('/Alive', async (request, reply) => sendReply(reply, {status: 'ok', port: process.env.PORT, url: process.env.URL}));
  return app;
}

function sendReply(reply, status, body) {
  reply
    .header('Access-Control-Allow-Origin', '*')
    .send({ status, body });
}

module.exports = build

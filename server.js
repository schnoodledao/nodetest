const fastify = require('fastify');

let app = fastify();
app.listen(process.env.PORT, process.env.URL, (err, address) => listen(err, address));

app.get('/Alive', async (request, reply) => sendReply(reply, 'ok'));

function listen(err, address) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server runs on', address);
  }
}

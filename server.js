'use strict'

const server = require('./app')({
  logger: {
    level: 'info',
    prettyPrint: true
  }
})

server.listen(process.env.PORT, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});

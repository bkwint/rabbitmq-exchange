const amqp = require('amqp');
const uuid = require('uuid');

const connection = amqp.createConnection({ host: 'localhost', login: "admin", password: "nimda", vhost: "test-vhost" });

connection.addListener('error', function (e) {
  throw e;
})

connection.addListener('close', function (e) {
  puts('connection closed.');
});

connection.addListener('ready', function () {

    var exchange = connection.exchange('test-exchange', {type: 'fanout', durable: true, autoDelete: false});
    exchange.on('open', () => {
        console.log('exchange opened');

        exchange.publish('some test', Buffer.from(uuid.v4()), {contentType: "text/plain"}, (err, msg) => {
            console.log(err, msg);
        });

        setTimeout(() => {
          connection.disconnect();
          process.exit(1);
        }, 100);
    })
});
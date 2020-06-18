const amqp = require('amqp');
const connection = amqp.createConnection({ host: 'localhost', login: "admin", password: "nimda", vhost: "test-vhost" });

connection.addListener('error', function (e) {
  throw e;
})

connection.addListener('close', function (e) {
  puts('connection closed.');
});

connection.addListener('ready', function () {
    const queue = connection.queue(process.env.QUEUENAME, { durable: true, autoDelete: false });
    queue.subscribe((message) => {
        console.log(message.data.toString());
    });
});
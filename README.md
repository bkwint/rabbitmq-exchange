# Rabbit MQ exchange example

A small example docker set up with RabbitMQ to send messages to a single exchange and push it to multiple queues. Publisher and consumers have been written in nodejs.

# Startup rabbit mq
```docker-compose up --build -d```

# Running the consumer and publisher
```
cd nodejs
npm ci
QUEUENAME=webhook node consumer.js
QUEUENAME=log node consumer.js

node publish.js
```
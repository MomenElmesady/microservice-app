const amqp = require('amqplib');

async function connectRabbitMQ() {
  return amqp.connect('amqp://localhost');
}

module.exports = { connectRabbitMQ };

FROM rabbitmq:3.8.5-management

COPY config/rabbitmq.conf /etc/rabbitmq/
COPY config/custom_definitions.json /etc/rabbitmq/

CMD ["rabbitmq-server"]
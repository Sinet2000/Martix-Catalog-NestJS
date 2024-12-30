// src/modules/messaging/messaging.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { connect, Connection, Channel } from 'amqplib';
import envConfig from 'src/config/env.config';
import { LoggerService } from 'src/logger/logger.service';
import { Order } from './order.interface';

@Injectable()
export class MessagingService implements OnModuleInit {
  private connection: Connection;
  private channel: Channel;

  constructor(private readonly logger: LoggerService) {}

  async onModuleInit() {
    try {
      this.connection = await connect(envConfig().rabbitMqUrl);
      this.channel = await this.connection.createChannel();
      await this.channel.assertQueue('orders', { durable: true });
      this.logger.info('Connected to RabbitMQ and queue asserted.');
    } catch (error) {
      this.logger.error('Could not connect to RabbitMQ', { error });
    }
  }

  async sendOrder(order: Order) {
    if (!this.channel) {
      this.logger.warn('Channel not available, cannot send order');
      return;
    }
    this.channel.sendToQueue('orders', Buffer.from(JSON.stringify(order)), {
      persistent: true,
    });
    this.logger.info('Order sent to queue', { orderId: order.id });
  }
}
